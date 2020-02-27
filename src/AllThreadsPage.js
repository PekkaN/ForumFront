import React, {Component} from 'react';
import './Apps.css';
import Thread from "./Thread";

const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class AllThreadsPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            threads: [
                {
                    threadName: 'rajuu menoo',
                    threadText: 'koodattu nii vituiks.',
                    threadTimestamp : 2019-12-12,
                    threadId: 0,
                    topicId: 0
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

        fetch("http://localhost:8080/forum/topicthreads/2")
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
                <Header className='TopicsListHeader' text={'Ketjut'}/>
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

export default AllThreadsPage;
