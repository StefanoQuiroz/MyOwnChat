import React, { useEffect, useState } from 'react';
import './NewChat.scss';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Avatar } from '@material-ui/core';
import login from '../../firebase/Api';

const NewChat = (props) => {
    const {user, chats, showNewChat, setShowNewChat} = props;
    
    const [listNewChat, setListNewChat] = useState([]);

    useEffect(() => {
        const getList = async () => {
            if(user !== null){
                const results = await login.getContactList(user.id);
                setListNewChat(results);
            }
        }
        getList();
    }, [user])

    const addNewChat = async (user2) => {
        await login.addNewChat(user, user2);
        onClickClose();
    }

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
                    <div className="newChatListItem" key={index} onClick={()=>addNewChat(item)}>
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
