import React from "react";
import ButtonField from "../buttonField";
import "./index.css"

interface Props {
    profileImage: any,
    first_name: string,
    last_name: string,
    biography: string,
    contact: string,
    email: string
}

const UserShow:React.FC<Props> = ({ profileImage, first_name, last_name, biography, contact, email}) => {
    return (
        <section className="userBox">
            <div className="userBox__top">
                <figure>
                    <img alt="Imagem de perfil" src={profileImage} />
                    <figcaption>Imagem de perfil</figcaption>
                </figure>
                <article className="aboutThey">
                    <h2>
                        {first_name} {last_name}
                    </h2>
                    <p>
                        {biography}
                    </p>
                </article>
            </div>
            <div className="userBox__bottom">
                <a href={`https://api.whatsapp.com/send?phone=55${contact}&text=Te%20conheci%20pelo%20Seta%20%3DD`}>
                    <ButtonField content={"WhatsApp"} />
                </a>
                <a href={`mailto:${email}`}>
                    <ButtonField content={"Email"} />
                </a>
            </div>
        </section>
    )
}

export default UserShow;
