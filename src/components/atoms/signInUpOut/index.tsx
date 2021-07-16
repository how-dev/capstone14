import React from "react";
import "./index.css"
import TemporaryDrawer from "../../molecules/drawerUI";

const SignInUpOut:React.FC = () => {
    const isLogged = localStorage.getItem("token@SETA")

    return (
        <>
            {
                isLogged ?
                    <section className="links">
                        <TemporaryDrawer />
                    </section>
                    :
                    <section className="links">
                        <a href="http://localhost:3000/login/">Entre</a> | <a href="http://localhost:3000/signup/">Cadastre-se</a>
                    </section>
            }
        </>

    )
}

export default SignInUpOut;
