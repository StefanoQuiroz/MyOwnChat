import React from 'react';
import './MessageItem.scss'; 

const MessageItem = (props) => {
    const {data, user} = props;
    return (
        <div className="chatMessageLine" style={
            {justifyContent: user.id === data.name ? "flex-end" : "flex-start"}
        }>
            <div 
            className="chatMessage"
            style={{backgroundColor: user.id === data.name ? "#DCF8C6" : "#FFFFFF"}}
            >
                <div className="chatMessageText">{data.message}</div>
                <div className="chatTime">
                    18:43PM
                </div>
            </div>
        </div>
    );
} 

export default MessageItem;
