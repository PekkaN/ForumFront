import React from 'react';
import './Apps.css';
import Topic from "./Topic";
import AllThreadPage from './AllThreadsPage';

const topics = [
    {
        name: 'Topic1',
        description: 'Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!'
    },
    {
        name: 'Topic2',
        description: 'Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!!'
    },
    {
        name: 'Topic4',
        description: 'Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!!'
    },
    {
        name: 'Topic5',
        description: 'Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!\n'
    },
    {
        name: 'Topic6',
        description: 'Seuraavat 21 kuukautta??- Mika Saukkosen (MTV3) sanoin: "Seuratkaapa sitä". Tänään keikka Helsingin Kauppakorkealla;'
    },
    {
        name: 'Topic7',
        description: '"tulevaisuuden toivot" asiakkaina- "det blir spännande" sanoisivat Foppa ja Sundin!!'
    },
    {
        name: 'Topic8',
        description: 'Sitä ennen Turun Logomoon avaamaan Nyrkkeilykisat;'
    },
    {
        name: 'Topic9',
        description: 'minusta meidän urheiluihmisten on TSEMPATTAVA toinen toisiamme yli lajirajojen ja sen aion TAAS KERRAN tehdä!!'
    },
    {
        name: 'Topic10',
        description: 'Mutta no hätä , lomallahan tässä ollaan. Simply great- keep rocking jatkossakin!!'
    }
]

const Header = (props) => <h2 className={props.className}>{props.text}</h2>
// const Button = (props)=><button className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>


const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>

const TopicRows = () => topics.map(topic => <li><Topic  name = {topic.name} description={topic.description}/></li>)



const FrontPage = () => {
    return (
        <div className='Main'>
            <Header className='TopicsListHeader' text={ 'Aiheet'}/>
            <ul className='TopicsList'>
                {TopicRows()}
            </ul>
        </div>
    )
}

export default FrontPage;
