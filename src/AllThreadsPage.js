import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import './Apps.css';
import signInLogo from './sign-in-alt-solid.svg';
import homePageLogo from './home-solid.svg';

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

const NavBar = ()=> {
    return (
        <div className='Nav'>
            <Button className = 'HomeButton' src={homePageLogo} imageClass='HomeLogo'/>
            <MainHeader className='MainHeader' text = 'Academy Foorumi'/>
            <Button  className = 'LoginButton' name = 'Kirjaudu' src={signInLogo} imageClass='signInLogo'/>
        </div>
    )
}
const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>

/*const Topic = ({name,description}) => {
    return (
        <div className='Topic'>
            <h3 className='TopicName'>{name}</h3>
            <p className='TopicDescription'>{description}</p>
        </div>)
}
const TopicRows = () => topics.map(topic => <li><Topic name = {topic.name} description={topic.description}/></li>)*/

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
            <Thread name = {thread.name} user= {thread.user} timestamp = {thread.timestamp} replies = {thread.replies}/>
        </li>))
}
const ThreadRowsWithNameOnly = () =>  threads.map(thread => <li><Thread name = {thread.name}/></li>)

const MainContent = () => {
    return (
        <div className='Main'>
            <Header className='MainThreadsListHeader' text={ 'AiheXXXXX'}/>
            <ul className='ThreadsList'>
                {ThreadRows()}
            </ul>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className='SideBar'>
            <Header className='SelectedThreadsHeader'text = 'Poiminnat'/>
            <ul className='SelectedThreadsList'>
                {ThreadRowsWithNameOnly()}
            </ul>
        </div>
    )
}


const AllThreadsPage = ()=>{
    return (
        <div className='FrontPage'>
            <NavBar/>
            <MainContent/>
            <SideBar/>
        </div>
    )
}

export default AllThreadsPage;