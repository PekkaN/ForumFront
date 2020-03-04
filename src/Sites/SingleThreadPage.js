import React, {Component} from "react";
import '../Apps.css';
import Comment from "../Components/Comment";
const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class SingleThreadPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {
                    text: 'rajuu menoo',
                    user: 'koodattu nii paljon.',
                    threadTimestamp : 2019-12-12,
                    likes: 0,
                }
            ]
        }
    }

    componentDidMount() {
        const setComments = (comments) => {
            console.log(comments)
            this.setState({
                comments
            })
        }
        const id = this.props.match.params.id;
        fetch("http://localhost:8080/forum/threadcomments/"+id)
            .then((response) => {
                return response.json();
            })
            .then(setComments)
            .catch((error)=> {
                console.log(error)

            })
    }


    render(){

        return (

            <div className='MainContent'>
                <Header className='TopicsListHeader' text={'Kommentit'}/>
                <ul className="TopicsList">
                    {this.state.comments.map ((comment) => (
                        <li>
                            <Comment comment = {comment} {...this.props}/>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

export default SingleThreadPage;
