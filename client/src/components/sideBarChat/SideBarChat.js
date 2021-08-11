import React, { useEffect, useState } from 'react'
import './SideBarChat.scss';
import { Avatar } from '@material-ui/core';
import { FiChevronDown } from "react-icons/fi";
export default function SideBarChat({onClick, active, data}) {

    const [time, setTime] = useState("");
    useEffect(()=>{
        if(data.lastDate > 0){
            const date = new Date(data.lastDate.seconds*1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            hours = hours < 10 ? "0"+hours : hours;
            minutes = minutes < 10 ? "0"+minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div className={`sideBarChat ${active ? `active` : ""}`} onClick={onClick}>
            <Avatar src={data.avatar}/>
            <div className="sideBarChatInfo">
                <h2>{data.name}</h2>
                <p>{data.message}</p>
            </div>
            <div className="sideBarChatTime">
                {time}
                <div className="sideBarChatIcon">
                    <FiChevronDown/>
                </div>        
            </div>        
        </div>
    )
}
