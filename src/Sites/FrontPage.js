import React from 'react';
import '../Apps.css';
import Topic from "../Components/Topic";

const Header = (props) => <h2 className={props.className}>{props.text}</h2>

class FrontPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics: [
                {
                    name: 'rajuu menoo',
                    description: 'koodattu nii paljon.'
                }
            ]
        }
    }

componentDidMount() {
    const setTopics = (topics) => {
        console.log(topics)
        this.setState({
            topics
        })
    }

    fetch("http://localhost:8080/forum/topics")
        .then((response) => {
            return response.json();
        })
        .then(setTopics)
        .catch((error)=> {
            console.log(error)

        })
}


render(){

    return (

            <div className='MainContent'>
                <Header className='TopicsListHeader' text={'Aiheet'}/>
                <ul className="TopicsList">
                    {this.state.topics.map ((topic) => (
                        <li>
                         <Topic  topic = {topic}/>
                        </li>
                    ))}
                </ul>
            </div>
    )
}
}

export default FrontPage;
