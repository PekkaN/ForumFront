import React from "react";




    const Topic = ({name, description}) => {
        return (
            <div className='Topic'>
                <h3 className='TopicName'>{name}</h3>
                <p className='TopicDescription'>{description}</p>
            </div>)
    }

export default Topic;
