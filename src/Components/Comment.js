import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Apps.css';

const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.comment.text,
            user: this.props.comment.user,
            timestamp: this.props.comment.timestamp,
            likes: this.props.comment.likes,
            id: this.props.comment.id
        }
    }

    render() {
        return (
            <div className='TopicsList'>
                <p> {this.props.comment.timestamp}</p>
                <p>{this.props.comment.text}{this.props.comment.user}</p>
            </div>
        );
    }
}

export default Comment;
