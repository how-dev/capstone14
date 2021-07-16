import React, { useState, useEffect } from "react";
import "./index.css"
import UserShow from "../../atoms/userShow";
import defaultImage from "../../../imgs/default.jpg"
import axios from "axios";

const AllUserCard:React.FC = () => {
    const [users, addUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/accounts/").then((res: any) => addUsers(res.data))
    })

    return (
        <main className="allUser">
            {
                users.filter((elt: any) => elt.isVisible).map((elt: any, index) => {
                    return (
                        <UserShow key={index} profileImage={defaultImage} first_name={elt.first_name} last_name={elt.last_name} biography={elt.biography} contact={elt.contact} email={elt.email} />
                    )
                })
            }
            <p className="lastMessage">
                É tudo por hoje =D
            </p>
        </main>
    )
}

export default AllUserCard;
