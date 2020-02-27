import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Apps.css';
import Topic from './Topic'

class Thread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.thread.name,
            text: this.props.thread.text,
            timestamp : this.props.thread.timestamp,
            threadId: this.props.thread.id,
            topicId: this.props.thread.id
        }
    }

    render() {
        return (
            <Link to={'./threads/'+this.props.thread.name}> <div className='TopicsList'>
                <h4>{this.props.thread.name}</h4>
                <p>{this.props.thread.threadId}</p>
            </div></Link>
        );
    }
}
export default Thread;
