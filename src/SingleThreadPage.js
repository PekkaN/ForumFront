import React, {Component} from 'react';
import './Apps.css';
import Thread from "./Thread";

const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class SingleThreadPage extends Component{
    constructor(props) {
        super(props);

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

    fetch("http://localhost:8080/forum/threadcomments/1")
        .then((response) => {
            return response.json();
        })
        .then(setThreads)
        .catch((error)=> {
            console.log(error)

        })
}


render(){

    return (

        <div className='MainContent'>
            <Header className='TopicsListHeader' text={'Kommentit'}/>
            <ul >
                {this.state.threads.map ((thread) => (
                    <li>
                        <Thread thread = {thread}/>
                    </li>
                ))}

            </ul>
        </div>
    )
}
}



export default SingleThreadPage;
