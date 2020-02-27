import React, {Component} from 'react';
import './Apps.css';


import LogInForm from "./LogInForm";

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

const Textarea = (props)=><textarea name={props.name} className={props.className}/>
const TextInput = (props) =><input name={props.name} className = {props.className}/>

        this.state = {
            comments: [
                {
                    text: 'rajuu menoo',
                    threadText: 'koodattu nii vituiks.',
                    user: 'Lion74',
                    timestamp : 2019-12-12,
                    likes: 0,
                    commentid: 0
                }
            ]
        }
    }
componentDidMount() {
    const setThreads = (threads) => {
        console.log(threads)
        this.setState({
            threads
        })
    }



render(){

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


const CommentArea = () => <Textarea className='CommentArea' name ='Comment'/>
//const ForumUserHeader = () => <h3>Nimimerkki</h3>
//const UserNameField = () => <TextInput className = 'UserNameField' name = 'userNameField'/>
const CommentSubmitButton = () => <Button className='CommentSubmitButton' name = 'LÄHETÄ' clickHandle={SubmitComment}/>
const SubmitComment =()=> {
    return (
        console.log('tässä funktiossa tehdään kommentin postaus, kunhan keretään....')
    )
}

const CommentBox = () => {
    return (
        <div className='CommentBoxContainer'>
        <form className='CommentBoxForm'>
            <CommentArea/>
            <CommentSubmitButton/>
        </form>
        </div>
    )
}


        <div className='MainContent'>
            <Header className='TopicsListHeader' text={'Kommentit'}/>
            <ul >
                {this.state.threads.map ((thread) => (
                    <li>
                        <Thread thread = {thread}/>
                    </li>
                ))}

            </ul>
            <CommentBox/>
        </div>
    )
}
}



export default SingleThreadPage;
