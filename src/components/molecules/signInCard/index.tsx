import React, {useState} from "react";
import TextField from "../../atoms/textField";
import ButtonField from "../../atoms/buttonField";
import { useForm } from "react-hook-form";
import { SignInRequisition } from "../../../requisitions";
import "./index.css"
import {useHistory} from "react-router-dom";

const SignInCard:React.FC = () => {
    const { handleSubmit, setValue } = useForm()
    const [error, setError] = useState(false)
    const history = useHistory()

    if (localStorage.getItem("token@SETA")) {
        history.push("/profile/")
    }

    const SignIn = (data: any) => {
        SignInRequisition(data, history, setError)
    }

    return (
        <>
            <main className="loginBox">
                <form
                    className="loginBox__form"
                    onSubmit={handleSubmit(SignIn)}
                >
                    <h2 className="titleSignIn">
                        Entre
                    </h2>
                    <TextField placeholder={"Email"} type={"email"} onChange={(e: any) => {
                        setError(false)
                        setValue("email", e.target.value)
                    }}/>
                    <TextField placeholder={"Senha"} type={"password"} onChange={(e: any) => {
                        setError(false)
                        setValue("password", e.target.value)
                    }}/>
                    <ButtonField content={"Entrar"} />
                    <p>Ou <a href="http://localhost:3000/signup/">cadastre-se</a></p>
                </form>
                <p className="loginBox__errorMessage">{error && "Poxa, há algo de errado no seu login =("}</p>
            </main>
            <p className="cuteMessage">Que bom te ver de novo =)</p>
        </>
    )
}

export default SignInCard;
