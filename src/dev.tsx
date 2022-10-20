import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import InputEditor from "./index";
import reportWebVitals from "./reportWebVitals";

// After
function AppWithCallbackAfterRender() {
    const [inputChat, setInputChat] = useState('')

    useEffect(() => {
        console.log('rendered');
    });

    const onDone = () => {
        console.log(inputChat)
    }

    return <InputEditor inputChat={inputChat} setInputChat={setInputChat} onDone={onDone}/>
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<AppWithCallbackAfterRender/>);

reportWebVitals()