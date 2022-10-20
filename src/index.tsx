import React, {useEffect, useRef, useState} from 'react'
import {useCtrlEnter} from 'use-hot-key-element-v2'
import {isFunction} from "lodash";
import "./index.css";

type InputProp = {
    inputChat: string,
    setInputChat: any,
    onDone?: any,
    config?: any
}

function InputEditor(props: InputProp) {
    const {inputChat, setInputChat, onDone, config} = props
    const editorRef = useRef({})
    const [editorLoaded, setEditorLoaded] = useState(false)
    const [des, setDes] = useState('')
    const {CKEditor, ClassicEditor}: any = editorRef?.current || {}
    const [isQuickSaved] = useCtrlEnter('.ck.ck-content')

    useEffect(() => {
        if (!isQuickSaved) return;

        console.log(inputChat);
        if (isFunction(onDone))
            onDone().then()

        setDes('')
    }, [isQuickSaved])

    useEffect(() => {
        // @ts-ignore
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
        }
        setEditorLoaded(true)
    }, [])

    useEffect(() => {
        // @ts-ignore
        setInputChat(des?.replaceAll('<p>&nbsp;</p>', ''))
    }, [des])

    return editorLoaded ? (
        <CKEditor
            editor={ClassicEditor}
            data={des}
            onChange={(_event: any, editor: any) => {
                const data = editor.getData("");
                setDes(data)
            }}
            config={config ? config : {
                toolbar: false,
            }}
            autoParagraph={false}
            onReady={(editor: any) => {
                if (editor)
                    editor.editing.view.focus();
            }}
        />
    ) : (
        <div>Editor loading</div>
    )
}

export default InputEditor;