import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./index.css"
import Interruptor from "../../atoms/interruptor";
import defaultImage from "../../../imgs/default.jpg";
import { SetProfileVisibility, ChangeAbout } from "../../../requisitions";
import TextField from "../../atoms/textField";
import ButtonField from "../../atoms/buttonField";
import SnackBarUI from "../../atoms/snackBarUI";
import { useForm } from "react-hook-form";

const ProfileCard:React.FC = () => {
    const history = useHistory()
    if (!localStorage.getItem("token@SETA")) {
        history.push("/")
    }
    const [user, setUser] = useState({id: 0, first_name: "", last_name: "", biography: "", contact: "", email: "", isVisible: true})
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const { handleSubmit, setValue } = useForm()

    const userId = localStorage.getItem("id@SETA")
    const token = localStorage.getItem("token@SETA")

    useEffect(() => {
        axios.get(`http://localhost:8000/accounts/${userId}/`).then(res => {setUser(res.data)})
    }, [userId])

    const partialUpdate = (data: any) => {
        ChangeAbout(userId, token, data, setUser)
    }

    if (user) {
        return (
            <>
                <h2 className="profileMessage">Olá, {user.first_name} 	&lt;3 </h2>
                <main className="profileBox">
                    <figure className="profileBox__profileImage">
                        <img src={defaultImage} alt="Foto de perfil"/>
                        <figcaption>Foto de perfil</figcaption>
                    </figure>
                    <p className="profileBox__mainName">{user.first_name} {user.last_name}</p>
                    <hr/>
                    <section className="profileBox__isActive">
                        <div className="isActiveOption">
                            <p className="isActiveOption__label">
                                Perfil Visível:
                            </p>
                            <Interruptor clicked={user.isVisible} changeVisibility={SetProfileVisibility} id={user.id} setUser={setUser} token={localStorage.getItem("token@SETA")} user={user.isVisible}/>
                        </div>
                        {
                            user.isVisible ?
                                <p className="isActiveLabel">
                                    Seu perfil está VISÍVEL para as empresas! Isso significa que a qualquer momento você pode
                                    receber um contato para te conhecer melhor =D Você pode ficar INVISÍVEL se quiser, é só
                                    desativar esta opção.
                                </p>
                            :
                                <p className="isActiveLabel">
                                    Seu perfil está INVISÍVEL para as empresas! Isso significa que as empresas NÃO estão vendo
                                    seu perfil no momento ='(
                                </p>
                        }
                    </section>
                    <section className="aboutYou">
                        <form
                            onSubmit={handleSubmit(partialUpdate)}
                        >
                            <h2 className="aboutYou__title aboutYou__title--mainTitle">
                                Sobre você
                            </h2>
                            <h4 className="aboutYou__title aboutYou__title--biography">
                                Biografia
                            </h4>
                            <TextField placeholder={""} type={"text"} value={user.biography} onChange={(e: any) => {
                                setUser({...user, biography: e.target.value} )
                                setValue("biography", e.target.value)
                            }}/>
                            <h4 className="aboutYou__title aboutYou__title--WhatsApp">
                                WhatsApp
                            </h4>
                            <TextField placeholder={""} type={"text"} value={user.contact} onChange={(e: any) => {
                                setUser({...user, contact: e.target.value} )
                                setValue("contact", e.target.value)
                            }}/>
                            <h4 className="aboutYou__title aboutYou__title--Email">
                                Email
                            </h4>
                            <TextField placeholder={""} type={"text"} value={user.email} onChange={(e: any) => {
                                setUser({...user, email: e.target.value} )
                                setValue("email", e.target.value)
                            }}/>
                            <br/>
                            <br/>
                            <ButtonField content={"Atualizar"} func={handleClick}/>
                        </form>
                    </section>

                    <SnackBarUI open={open} setOpen={setOpen} />

                </main>
            </>

        )
    } else {
        return <h1> Carregando </h1>
    }

}

export default ProfileCard;
