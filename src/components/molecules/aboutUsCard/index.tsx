import React from "react";
import "./index.css"

const AboutUsCard:React.FC = () => {
    return (
        <main className="aboutUsBox">
            <h2 className="aboutUsBox__title aboutUsBox__title--dynamic">
                Qual a dinâmica da Seta?
            </h2>
            <p className="aboutUsBox__paragraph">
                Aqui todas as empresas sabem que você não tem (ou tem pouca) experiência no mercado de trabalho.
                A ideia é que é mais vantajoso para a empresa formar um profissional que cresça junto a ela, acostumado
                com todos os processos e dinâmicas. Sem contar que empresas que investem na juventude, investem no
                futuro. Você <strong>NÃO PAGA NADA</strong> para se cadastrar e estar visível para as empresas entrarem
                em contato com você.
            </p>
            <h2 className="aboutUsBox__title aboutUsBox__title--why">
                Por que?
            </h2>
            <p className="aboutUsBox__paragraph">
                Porque nós acreditamos na juventude. Acreditamos que a energia e a vontade de crescer é o que nos move.
                É muito mais fácil você ensinar uma pessoa a trabalhar do que ensinar, por exemplo, a se comunicar,
                a ser assertivo, a se organizar bem... Coisas que a juventude se mostra muito mais "modelável" nesses
                pontos.
            </p>
            <h2 className="aboutUsBox__title aboutUsBox__title--how">
                Como?
            </h2>
            <p className="aboutUsBox__paragraph">
                Ao se cadastrar como usuário, você põe os dados <strong>QUE QUISER</strong> que as empresas vejam.
                Inclusive, pode escolher se elas te veem ou não (vai que você já conseguiu um trabalho e não quer
                receber mais propostas?). Todas as empresas estão cientes de que, no geral, todos os usuários da
                plataforma estão buscando o primeiro emprego, então não se preocupe em demonstrar experiência, apenas
                seja verdadeiro(a). Curtiu? Vem <a href="http://localhost:3000/signup/">ser Seta</a> =)
            </p>
        </main>
    )
}

export default AboutUsCard;
