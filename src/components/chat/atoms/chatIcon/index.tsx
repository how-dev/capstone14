import React, { useState, useEffect } from "react";
import SendIcon from '@material-ui/icons/Send';
import "./index.css"

interface Props {
    click?: boolean
}

const keyWords: any = {
    $default: "Não entendi a sua dúvida =( Pode tentar de novo?",
    cadastro: "Então, se você não é cadastrado(a), faz o seguinte... Ao fechar o chat, no canto superior direito, você vai ver duas opções: 'Entre | Cadastre-se'. É só clicar em 'Cadastre-se' e preencher o formulário =) Algo mais?",
    "cadastro?": "Então, se você não é cadastrado(a), faz o seguinte... Ao fechar o chat, no canto superior direito, você vai ver duas opções: 'Entre | Cadastre-se'. É só clicar em 'Cadastre-se' e preencher o formulário =) Algo mais?",
    login: "Beleza... Pra você fazer o seu login, é o seguinte... Ao fechar o chat, no canto superior direito, você vai ver duas opções: 'Entre | Cadastre-se'. É só clicar em 'Entre' =) Algo mais?",
    "login?": "Beleza... Pra você fazer o seu login, é o seguinte... Ao fechar o chat, no canto superior direito, você vai ver duas opções: 'Entre | Cadastre-se'. É só clicar em 'Entre' =) Algo mais?",
    oi: "Oi, tudo bem? Qual sua dúvida?",
    oie: "Oiee =D O que deseja?",
    editar: "Pra você editar seus dados, primeiro certifique-se de estar logado(a). No canto superior direito, você verá 3 tracinhos. Clique nele, e vá em 'Minha conta'. Rolando um pouquinho para baixo, você vai ver as opções de mudança. Modificando o que deseja, é só clicar em 'Salvar' =D Mais alguma coisa?"

}

const ChatIcon:React.FC<Props> = () => {
    const [click, setClick] = useState(false)
    const [value, setValue] = useState("")
    const [messages, addMessage] = useState([
        {author: "bot", message: "Olá! =D"}
    ])
    const [sent, setSent] = useState(true)

    const handleMessage = (e: any) => {
        setValue(e.target.value)
    }


    const sendMessage = () => {
        let message = value.trim()
        if (message !== "") {
            addMessage([...messages, {author: "user", message}])
            setSent(!sent)
        }
        setValue("")
    }

    useEffect(() => {
        let key = messages[messages.length - 1].message.split(" ")
        let botMessage = ""

        Object.keys(keyWords).forEach((botKey) => {
            if (key.includes(botKey)) {
                botMessage = keyWords[botKey]
            }
        })

        setTimeout(() => {
            addMessage([...messages, {author: "bot", message: botMessage !== "" ? botMessage : "Sou Selena! No que posso te ajudar hoje?"}])
            const lastMessage = document.getElementsByClassName("theChat")[0]
            if (lastMessage) {
                lastMessage.scrollTop = 50000;
            }

        }, 1500)
        const lastMessage = document.getElementsByClassName("theChat")[0]
        if (lastMessage) {
            lastMessage.scrollTop = 50000;
        }
    }, [sent])

    return (
        <section
            className={click ? "chatIconClicked" : "chatIcon"}
            onClick={!click ? () => {setClick(!click)} : () => {}}
        >
            {
                click ? (
                    <>
                        <header
                            className="chatHeader"
                        >
                            <h3>
                                <div className="onlineSelena">

                                </div>
                                Selena [bot]
                            </h3>
                            <section className="close" onClick={() => {setClick(!click)}}>
                                <div className="closeX">

                                </div>
                                <div className="closeY">

                                </div>
                            </section>
                        </header>
                        <main className="theChat">
                            {messages.map((elt: any, index: number) => {
                                return (
                                    <div key={index} className={elt.author === "user" ? "userMessage" : "botMessage"}>
                                        {elt.message}
                                    </div>
                                )
                            })}
                        </main>
                        <section className="chatInput">
                            <input
                                className="chatInput__input"
                                placeholder="No que você precisa de ajuda?"
                                value={value}
                                onChange={handleMessage}
                            />
                            <SendIcon
                                className="sendIcon"
                                onClick={sendMessage}
                            />
                        </section>
                    </>


                ) : (<div className="Help">Me helpa</div>)
            }
        </section>
    )
}

export default ChatIcon;
