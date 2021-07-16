import React from "react";
import "./index.css"

interface Props {
    clicked: boolean,
    changeVisibility: any,
    id: any,
    token: any,
    setUser: any,
    user: any
}

const Interruptor:React.FC<Props> = ({ clicked, changeVisibility, id, token, setUser, user }) => {

    return (
        <div className="interruptorBox">
            <div className={clicked ? "interruptor" : "interruptor__disabled"} onClick={() => {
                changeVisibility(id, token, setUser, user)
            }}>
                <div className={clicked ? "interruptor__false" : "interruptor__true"}>

                </div>
            </div>
            <span className={clicked ? "interruptorBox__message--enabled" : "interruptorBox__message--disabled"}>{clicked ? "Ativo" : "Inativo"}</span>
        </div>
    )
}

export default Interruptor
