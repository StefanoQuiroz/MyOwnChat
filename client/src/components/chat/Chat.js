import React from 'react';
import './Chat.scss'; 
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import { FaRegSmileWink } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

//import axios from 'axios';


const Chat = (props) => {

    /* const {messages, setMessages} = props;
    const [input, setInput] = useState('');
    
    const createMessage = (event) => {
        axios.post(`/api/messages/new`, {
            message : input,
            name : "Stefano",
            timestamp : "Demo timestamp",
            received : true
        })
            .then(response => setMessages([...messages, input]))
            .catch(err => console.error(err));
        setInput("");
    }
    
    const sendMessage = (event) => {
        event.preventDefault();
        createMessage(event);
    } */

    return (
        <div className="chat">
            <div className="chatHeader">
                <Avatar/>
                <div className="chatHeaderInfo">
                    <h3>Nombre</h3>
                    <p>últ. vez hoy a las(s) ... </p>
                </div>
                <div className="chatHeaderRight">
                    <IconButton>
                        <AiOutlineSearch/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chatBody">
                
                <div className="chatMessage">
                    <span className="chatName">Nombre</span>
                    <p className="chatMsg">Tu</p>
                    <span className="chatTime">
                        18:43PM
                    </span>
                </div>

                <div className="chatReceived">
                    <span className="chatName">Nombre</span>
                    <p className="chatMsg">Yo</p>
                    <span className="chatTime">
                        18:43PM
                    </span>
                </div>

                {/* <p className={ true ? styles.chatReciever : styles.chatMessage}>
                    <span className={styles.chatName}>Nombre</span>
                    Mensaje
                    <span className={styles.chatTimeStamp}>
                        18:43
                    </span>
                </p> */}

            </div>  

            <div className="chatFooter">
                <IconButton>
                    <FaRegSmileWink className="Icons"/>
                </IconButton>
                <IconButton>
                    <AttachFile className="Icons"/>
                </IconButton>
                <form>
                    <input type="text" /* value={input} onChange={(event) => setInput(event.target.value)} */ placeholder="Type a message"/>
                    <button /* onClick={sendMessage} */ type="submit">Escribe un mensaje aquí</button>
                </form>
                <IconButton>
                    <BiMicrophone className="Icons"/>
                </IconButton>
            </div>          
        </div>
    );
}

export default Chat;
