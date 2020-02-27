import React from 'react';
import './Apps.css';
import signLogo from "./sign-in-alt-solid.svg";
import homeLogo from './home-solid.svg';
import Topic from "./Topic";
import {Link} from "react-router-dom";

const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>
const Button = (props)=><button onClick={props.clickHandle} className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>
const goToHome = () => window.location='/'

    const Navbar = () => {

        return (
            <div className='Nav'>
                <Button className='HomeButton' src={homeLogo} imageClass='HomeLogo' clickHandle = {goToHome}/>
                <MainHeader className='MainHeader' text='Academy Foorumi'/>
                <Button className='LoginButton' name='Kirjaudu' src={signLogo} imageClass='signInLogo'/>
            </div>
        )
    }

export default Navbar;
