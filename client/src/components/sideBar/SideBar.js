import React, { useState } from 'react';
import './SideBar.scss';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { AiOutlineSearch } from "react-icons/ai";

import SideBarChat from '../sideBarChat/SideBarChat';

const SideBar = (props) => {

    const [chats, setChats] = useState([
        {id: 1, name: "Stefano", message:"Hola Como estas", avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png" },
        {id: 2, name: "Piero", message:"Hola Como estas", avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png" },
        {id: 3, name: "Andrés", message:"Hola Como estas", avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png" },
        {id: 4, name: "Xavier", message:"Hola Como estas", avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png" }
    ]);
    const {activeChat,setActiveChat} = props 

    return (
        <div className="sideBar">
            <div className="sideBarHeader">
                <Avatar className="sideBarAvatar" src="https://avatars.githubusercontent.com/u/72056993?v=4"/>
                <div className="sideBarHeaderRight">
                    <IconButton>
                        <DonutLargeIcon style={{color: "#919191"}}/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon style={{color: "#919191"}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{color: "#919191"}}/>
                    </IconButton>
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
        </div>
    );
}

export default SideBar;
