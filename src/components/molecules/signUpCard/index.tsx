import React, { useState } from "react";
import "./index.css"
import TextField from "../../atoms/textField";
import ButtonField from "../../atoms/buttonField";
import { useForm } from "react-hook-form";
import { SignUpRequisition } from "../../../requisitions";
import { useHistory } from "react-router-dom";

const SignUpCard:React.FC = () => {
    const [error, setError] = useState({isError: false, message: ""})
    const history = useHistory()

    if (localStorage.getItem("token@SETA")) {
        history.push("/profile/")
    }

    const SignUp = (data: any) => {
        SignUpRequisition(data, setError, error, history)
    }

    const { handleSubmit, setValue } = useForm()

    return (
        <main className="signUpBox">
            <form
                className="signUpBox__form"
                onSubmit={handleSubmit(SignUp)}
            >
                <h2 className="titleSignUp">
                    Cadastre-se
                </h2>
                <TextField placeholder={"Email"} type={"email"} onChange={(e: any) => {
                    setError({...error, isError: false})
                    setValue("email", e.target.value);
                }}/>
                <TextField placeholder={"Senha"} type={"text"} onChange={(e: any) => {
                    setError({...error, isError: false})
                    setValue("password", e.target.value);
                }}/>
                <TextField placeholder={"Nome"} type={"text"} onChange={(e: any) => {
                    setError({...error, isError: false})
                    setValue("first_name", e.target.value);
                }}/>
                <TextField placeholder={"Sobrenome"} type={"text"} onChange={(e: any) => {
                    setError({...error, isError: false})
                    setValue("last_name", e.target.value);
                }}/>
                <TextField placeholder={"Biografia"} type={"textarea"} onChange={(e: any) => {
                    setError({...error, isError: false})
                    setValue("biography", e.target.value);
                }}/>
                <ButtonField content={"Cadastrar"} />
                <p>Já tem cadastro? É só <a href="http://localhost:3000/login/">entrar!</a></p>
                <p className="signUpBox__errorMessage">
                    {error.isError && error.message}{error.message === "Email já existente, " && error.isError && <a href="http://localhost:3000/login/" >Faça login!</a>}
                </p>
            </form>
        </main>
    )
}

export default SignUpCard;
