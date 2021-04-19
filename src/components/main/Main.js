import React from "react";
import {Route} from "react-router-dom";
import WelcomeImage from "./WelcomeImage";
import SearchResult from "./SearchResult";

const Main = () => {
    return(
        <>
            <Route path="/" exact component={WelcomeImage} />
            <Route path="/results" component={SearchResult} />
        </>
    )
}
export default Main;