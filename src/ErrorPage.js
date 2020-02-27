import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {Route} from "react-router-dom";
import FrontPage from "./FrontPage";
import AllThreadsPage from "./AllThreadsPage";
import SingleThreadPage from "./SingleThreadPage";

const ErrorPage = () => {

    return (
    <div className='MainContent'>
        <h1>Lol took a wrong turn, theres nothing but 404 here.</h1>
    </div>
    )
}

export default ErrorPage;
