import React from 'react';
import './Apps.css';
import Topic from "./Topic";

const Header = (props) => <h2 className={props.className}>{props.text}</h2>
// const Button = (props)=><button className = {props.className}>{props.name}<img src={props.src} className= {props.imageClass}/></button>
// const MainHeader = (props)=> <h1 className={props.className}>{props.text}</h1>

class FrontPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics: [
                {
                    name: 'rajuu menoo',
                    description: 'koodattu nii vituiks.'
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
// const TopicRows = () => topics.map(topic => <li><Topic  name = {topic.name} description={topic.description}/></li>)
// const TopicRows = () => topics.map(topic => <li><Link to={'./threads/'+topic.name}><Topic  name = {topic.name}/></Link><p>{topic.description}</p> </li> )

// const FrontPage = () => {
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
