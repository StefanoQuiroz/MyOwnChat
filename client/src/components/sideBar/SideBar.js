import React, { useState } from 'react';
import './SideBar.scss';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { AiOutlineSearch } from "react-icons/ai";

import SideBarChat from '../sideBarChat/SideBarChat';
import NewChat from '../newChat/NewChat';

const SideBar = (props) => {
    const {activeChat,setActiveChat, user} = props 

    const [chats, setChats] = useState([]);

    const [showNewChat, setShowNewChat] = useState(false);
    const onClickNewChat = () => {
        setShowNewChat(true);
    }
    return (
        <div className="sideBar">
           
            <div className="sideBarHeader">
                <Avatar className="sideBarAvatar" src={user.avatar}/>
                <div className="sideBarHeaderRight">
                    <DonutLargeIcon style={{color: "#919191", cursor: "pointer"}}/>
                    <ChatIcon onClick={onClickNewChat} style={{color: "#919191", cursor: "pointer"}}/>
                    <MoreVertIcon style={{color: "#919191", cursor: "pointer"}}/>
                </div>
            </div>
            <div className="sideBarSearch">
                <div className="sideBarSearchContainer">
                    <AiOutlineSearch className="styles.Icon" />
                    <input type="search" placeholder="Busca un chat o inicia uno nuevo" />
                </div>
            </div>

            <div className="sideBarChatsList">
                {chats && chats.map((item, index) =>
                    <SideBarChat
                    key={index}
                    data={item}
                    active={activeChat.id === chats[index].id}
                    onClick={()=>setActiveChat(chats[index])}
                    /> 
                    )}
            </div>
            <NewChat user={user} chats={chats} showNewChat={showNewChat} setShowNewChat={setShowNewChat}/>
        </div>
    );
}

export default SideBar;
