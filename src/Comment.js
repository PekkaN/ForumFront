import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Apps.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.topic.title,
            description: this.props.topic.description,
            id: this.props.topic.id
        }
    }

    render() {
        return (
            <Link to={'./threads/'+this.props.topic.name}> <div className='TopicsList'>
                <h4>{this.props.topic.name}</h4>
                <p>{this.props.topic.description}</p>
            </div></Link>
        );
    }
}

export default Topic;
