import React from 'react'
import './SideBarChat.scss';
import { Avatar } from '@material-ui/core';
import { FiChevronDown } from "react-icons/fi";
export default function SideBarChat({onClick, active, data}) {
    return (
        <div className={`sideBarChat ${active ? `active` : ""}`} onClick={onClick}>
            <Avatar src={data.avatar}/>
            <div className="sideBarChatInfo">
                <h2>{data.name}</h2>
                <p>{data.message}</p>
            </div>
            <div className="sideBarChatTime">
                10:20PM
                <div className="sideBarChatIcon">
                    <FiChevronDown/>
                </div>        
            </div>        
        </div>
    )
}
