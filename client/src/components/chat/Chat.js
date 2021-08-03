import React from 'react';
import styles from './Chat.module.scss'; 
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';  
import MicIcon from '@material-ui/icons/Mic'
const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.chatHeader}>
                <Avatar/>
                <div className={styles.chatHeaderInfo}>
                    <h3>Nombre</h3>
                    <p>últ. vez hoy a las(s) ... </p>
                </div>
                <div className={styles.chatHeaderRight}>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className={styles.chatBody}>
                <p className={styles.chatMessage}>
                    <span className={styles.chatName}>Coding Dojo</span>
                    Mensaje escrito de Coding Dojo
                    <span className={styles.chatTimeStamp}>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className={styles.chatReciever}>
                    <span className={styles.chatName}>Stefano</span>
                    Mensaje escrito de Stefano
                    <span className={styles.chatTimeStamp}>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className={styles.chatMessage}>
                    <span className={styles.chatName}>Coding Dojo</span>
                    Mensaje escrito de Coding Dojo
                    <span className={styles.chatTimeStamp}>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>  

            <div className={styles.chatFooter}>
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>          
        </div>
    );
}

export default Chat;
