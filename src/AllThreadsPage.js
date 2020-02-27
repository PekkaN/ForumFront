import React, {Component} from 'react';
import './Apps.css';
import signInLogo from './sign-in-alt-solid.svg';
import homePageLogo from './home-solid.svg';
import {Link} from "react-router-dom";
import Topic from "./Topic";

const threads = [
    {
        name: 'joten tässä Sakulle rannesyöttö takaisin:',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: 'Saku oli aikoinaan valtakunnan lahjakkaimpia ',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksen; ',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: 'media voitti ,jääkiekko hävisi',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!!',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: 'joten tässä Sakulle rannesyöttö takaisin:',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: 'Saku oli aikoinaan valtakunnan lahjakkaimpia ',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksen; ',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: 'media voitti ,jääkiekko hävisi',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!!',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        name:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!',
        replies: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    }
]





const Header = (props) => <h2 className={props.className}>{props.text}</h2>
const Button = (props)=><button className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>

const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>

const Thread = ({name,user,timestamp,replies})=> {
    return (
        <div>
            <p>{name}</p>
            <div>{user}</div>
            <div>{timestamp}</div>
            <div> {replies}</div>
        </div>)
}
const ThreadRows = () => {
    return (
        threads.map(thread => <li>
            <Link to="./thread"><Thread name = {thread.name} /></Link><p><Thread user = {thread.user} timestamp = {thread.timestamp} replies = {thread.replies}/></p>
        </li>))
}
// const TopicRows = () => topics.map(topic => <li><Link to="./threads"><Topic  name = {topic.name} /></Link><p>{topic.description}</p> </li> )

const AllThreadsPage = () => {
    return (
        <div className='MainContent'>
            <Header className='MainThreadsListHeader' text={ 'AiheXXXXX'}/>
            <ul className='ThreadsList'>
                {ThreadRows()}
            </ul>
        </div>
    )
}


export default AllThreadsPage;
