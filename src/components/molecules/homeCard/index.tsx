import React, { useEffect, useState } from "react";
import "./index.css"
import ButtonField from "../../atoms/buttonField";
import axios from "axios";

const HomeCard = () => {
    const [qtdUsers, setQtdUsers] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/accounts/").then((res: any) => {setQtdUsers(res.data.filter((elt: any) => elt.isVisible).length)})
    }, [])

    return (
        <section className="homeContent">
            <h2 className="homeContent__title homeContent__title--slogan">
                O primeiro passo para o seu futuro
            </h2>
            <p className="homeContent__paragraph">
                Ajudamos você a dar o primeiro passo na sua carreira, com visibilidade, assertividade e objetividade.
            </p>
            <ButtonField content={"Saiba Mais"} action={"/aboutus/"} />
            <h2 className="homeContent__title homeContent__title--we">
                Quem somos
            </h2>
            <p className="homeContent__paragraph">
                Somos um grupo de pessoas que entende a atual situação
                do país, junto a empresas que acreditam na nova geração.
                Sem fins lucrativos, queremos mudar a realidade de onde
                vivemos e te ajudar a conquistar os seus sonhos
            </p>
            <h2 className="homeContent__title homeContent__title--signup">
                Curtiu?
            </h2>
            <p className="homeContent__paragraph">
                <ButtonField content={"Cadastre-se agora mesmo!"} action={"/signup/"} />
            </p>
            <h2 className="homeContent__title homeContent__title--allUsers">
                Conheça nossos usuários
            </h2>
            <p className="homeContent__paragraph">
                <p className="homeContent__paragraph">
                    Atualmente nossa rede conta com {qtdUsers} usuários ativos! Quer saber quem está fazendo parte disso?
                </p>
                <ButtonField content={"É só clicar aqui"} action={"/all/"} />
            </p>
        </section>
    )
}

export default HomeCard;
