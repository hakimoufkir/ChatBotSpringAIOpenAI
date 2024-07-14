
export default function Chat(){

    const [question,setQuestion]=useState<string>("");
    const [response,setResponse]=useState<string | undefined>("");


    async function send(){
        ChatAiService.ragChat(question).then(resp=>{
            setResponse(resp);
        })
    }


    return(
        <div className="p-m">
            <h3>Chat Bot</h3>
            <div>
                <TextField style={{width: '80%'}} onChange={(e => setQuestion(e.value)}/>
                <Button theme="primary">Send</Button>
            </div>
            <div>
                <Markdowm>
                    {response}
                </Markdowm>
            </div>
        </div>
    )
}