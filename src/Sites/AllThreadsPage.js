import React, {Component} from 'react';
import '../App.css';
import Thread from "../Components/Thread";

const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class AllThreadsPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            threads: [
                {
                    threadName: 'rajuu menoo',
                    threadText: 'koodattu nii paljon.',
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
        const id = this.props.match.params.id;
        fetch("http://localhost:8080/forum/topicthreads/"+id)
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
                <ul className="TopicsList">
                    {this.state.threads.map ((thread) => (
                        <li>
                            <Thread thread = {thread} {...this.props}/>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

export default AllThreadsPage;
