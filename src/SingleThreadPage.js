import React from 'react';
import './Apps.css';
// import signInLogo from './sign-in-alt-solid.svg';
// import homePageLogo from './home-solid.svg';
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
const comments = [
    {
        text: 'joten tässä Sakulle rannesyöttö takaisin:Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: 'Saku oli aikoinaan valtakunnan lahjakkaimpia Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!! ',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksen Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!; ',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: 'media voitti ,jääkiekko hävisi Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!! Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: 'joten tässä Sakulle rannesyöttö takaisin:Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: 'Saku oli aikoinaan valtakunnan lahjakkaimpia Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksenAamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!; ',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: 'media voitti ,jääkiekko hävisiAamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!!Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    },
    {
        text:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!',
        likes: 10,
        timestamp: '2020-02-26',
        user: 'tami'
    }
]





const Header = (props) => <h2 className={props.className}>{props.text}</h2>
// const Button = (props)=><button className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>

// const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>


const Comment = ({text,likes,timestamp,user})=> {
    return (
        <div>
            <p>{text}</p>
            <div>{likes}</div>
            <div>{timestamp}</div>
            <div> {user}</div>
        </div>)
}
const CommentRows = () => {
    return (
        comments.map(comment => <li>
            <Comment text = {comment.text} user= {comment.user} timestamp = {comment.timestamp} likes = {comment.likes}/>
        </li>))
}
// const Thread = ({name,user,timestamp,replies})=> {
//     return (
//         <div>
//             <p>{name}</p>
//             <div>{user}</div>
//             <div>{timestamp}</div>
//             <div> {replies}</div>
//         </div>)
// }
//const ThreadRowsWithNameOnly = () =>  threads.map(thread => <li><Thread name = {thread.name}/></li>)

const SingleThreadPage = () => {
    return (
        <div className='MainContent'>
            <Header className='ThreadHeader' text={ 'KommenttiketjuXXXXX'}/>
            <ul className='CommentsList'>
                {CommentRows()}
            </ul>
        </div>
    )
}



export default SingleThreadPage;
