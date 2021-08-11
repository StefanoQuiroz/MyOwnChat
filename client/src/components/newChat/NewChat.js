import React, { useState } from 'react';
import './NewChat.scss';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Avatar } from '@material-ui/core';

const NewChat = (props) => {
    const {user, chats, showNewChat, setShowNewChat} = props;
    
    const [listNewChat, setListNewChat] = useState([
        {id: 123, avatar: "https://avatars.githubusercontent.com/u/72056993?v=4", name: "Stefano"},
        {id: 123, avatar: "https://avatars.githubusercontent.com/u/72056993?v=4", name: "Stefano"},
        {id: 123, avatar: "https://avatars.githubusercontent.com/u/72056993?v=4", name: "Stefano"},
        {id: 123, avatar: "https://avatars.githubusercontent.com/u/72056993?v=4", name: "Stefano"},
        {id: 123, avatar: "https://avatars.githubusercontent.com/u/72056993?v=4", name: "Stefano"}
    ]);

    const onClickClose = () => {
        setShowNewChat(false)
    }

    return (
        <div className="newChat" style={{left: showNewChat ? "5%": "-415px"}}>
            <div className="newChatHeader">
                <AiOutlineArrowLeft onClick={onClickClose} className="btn" style={{color: "#fff"}}/>
                <div className="newChatHeaderTitle">
                    Nuevo Chat
                </div>
            </div>
            <div className="newChatList">
                {listNewChat && listNewChat.map((item, index)=> (
                    <div className="newChatListItem" key={index}>
                        <Avatar className="itemAvatar" src={item.avatar} />
                        <div className="newChatItemName">
                            {item.name}
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    );
}

export default NewChat;
