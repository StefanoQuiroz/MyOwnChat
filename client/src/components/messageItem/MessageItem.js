import React, { useEffect, useState } from 'react';
import './MessageItem.scss'; 

const MessageItem = (props) => {
    const {data, user} = props;
    const [time, setTime] = useState("");
    useEffect(()=>{
        if(data.date > 0){
            const date = new Date(data.date.seconds*1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            hours = hours < 10 ? "0"+hours : hours;
            minutes = minutes < 10 ? "0"+minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);
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
                    {time}
                </div>
            </div>
        </div>
    );
} 

export default MessageItem;
