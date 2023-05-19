import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user==="Admin") 
    {
        return (
            <div className="containerCentre"  >
                <div className="centered">
                {`${message}`}
                </div>
            </div>
        )
    }
    else if(user==="") 
    {
        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
        
    }
    else
    {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
}

export default Message
