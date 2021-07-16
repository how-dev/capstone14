import React from "react";
import { Route } from "react-router-dom";
import HomeCard from "../components/molecules/homeCard";
import AboutUsCard from "../components/molecules/aboutUsCard";
import SignUpCard from "../components/molecules/signUpCard";
import SignInCard from "../components/molecules/signInCard";
import ProfileCard from "../components/molecules/profileCard";
import SignInUpOut from "../components/atoms/signInUpOut";
import AllUserCard from "../components/molecules/allUserCard";

const Routes:React.FC = () => {
    return (
        <>
            <Route exact path="/">
                <SignInUpOut />
                <HomeCard />
            </Route>
            <Route path="/login/">
                <SignInCard />
            </Route>
            <Route path="/signup/">
                <SignUpCard />
            </Route>
            <Route path="/aboutus/">
                <SignInUpOut />
                <AboutUsCard />
            </Route>
            <Route path="/profile/">
                <SignInUpOut />
                <ProfileCard />
            </Route>
            <Route path="/all/">
                <SignInUpOut />
                <AllUserCard />
            </Route>
        </>

    )
}

export default Routes;
