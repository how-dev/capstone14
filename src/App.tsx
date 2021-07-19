import React from 'react';
import { Switch, useHistory } from "react-router-dom"
import Routes from "./routes"
import "./App.css"
import ChatIcon from "./components/chat/atoms/chatIcon";

const App:React.FC = () => {
    const history = useHistory()

    return (
        <main className="content">
            <header className="content__header">
                <h1 className="content__header--title" onClick={() => history.push("/")}>
                    Seta
                </h1>
            </header>
            <Switch>
                <Routes />
            </Switch>
            <ChatIcon />
        </main>
    )
}

export default App;
