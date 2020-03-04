import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import '../Apps.css';


const Button = (props)=><button onClick={props.clickHandle} className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>
const TextInput = (props) =><input name={props.name} className = {props.className}/>



const LogInForm =(props)=> {
    return (
        <div style={props.hiddenOrNot} className='LoginPage'>
        <div className= 'logInFieldBackground'></div>
        <form className='LogInForm'>
           <h2>Kirjaudu</h2>
            <p>Sähköpostiosoite <span>*</span></p>
            <TextInput className = 'EmailField' name = "Email"/>
            <p>Salasana <span>*</span></p>
            <TextInput className = 'PassWordField'/>
            <Button name = 'KIRJAUDU'/>
            <p>Unohditko Salasanasi?</p>
            <hr></hr>
            <p>JOS SINULLA EI VIELÄ OLE TUNNUSTA</p>
            <p>LUO TILI</p>
        </form>
        </div>
    )
}

export default LogInForm
