## Editor easy use by CKEditor

## Used

```js
    const [inputChat, setInputChat] = useState('')

    useEffect(() => {
        console.log('rendered');
    });

    const onDone = () => {
        console.log(inputChat)
    }

    return <InputEditor inputChat={inputChat} setInputChat={setInputChat} onDone={onDone}/>
```