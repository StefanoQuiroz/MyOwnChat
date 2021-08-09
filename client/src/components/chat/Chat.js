import React, { useState } from 'react';
import './Chat.scss'; 
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import { FaRegSmileWink } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSend, MdClose} from "react-icons/md";
import EmojiPicker from 'emoji-picker-react';

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

    let recognition = null;
    let SpeechRecognition = window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        //escuchar el sonido
        recognition = new SpeechRecognition();
        //recognition.lang="pt-BR";
        recognition.lang="es-CL";
        //recognition.lang="en-GB";
        //recognition.lang="it-IT";
        //recognition.lang=["pt-BR", "es-AR", "es-CL", "es-PE", "es-MX", "es-VE", "it-IT", "fr-FR", "de-DE", "en-GB", "en-US"]

    }
    
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [listening, setListening] = useState(false);
    const [input, setInput] = useState("");

    const onEmojiClick = (event, emojiObject) => {
        //console.log(emojiObject);
        setInput(input + emojiObject.emoji)      
    }

    //console.log(input);

    const onOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const onCloseEmoji = () => {
        setEmojiOpen(false);
    }



    const onClickMicro = () => {
        if(recognition !== null){
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (event) => {
                // transcript => transcribir el sonido en palabras
                setInput(event.results[0][0].transcript);
            }
            recognition.start();
         }
    }

    const onClickMessage = () => {

    }

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
                        <AiOutlineSearch style={{color: "#919191"}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVert style={{color: "#919191"}}/>
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


            <div className="chatEmoji" style={{height: emojiOpen ? "14rem" : "0rem" }}>
                <EmojiPicker disableSearchBar disableSkinTonePicker onEmojiClick={onEmojiClick}/>        
            </div>



            <div className="chatFooter">
                {emojiOpen ? 
                    <IconButton onClick={onCloseEmoji} style={{width:"3rem"}}>
                        <MdClose className="Icons" />
                    </IconButton>
                    :
                    <MdClose className="Icons" onClick={onCloseEmoji} style={{width:"0px"}}/>
                }
                <IconButton onClick={onOpenEmoji}>
                    <FaRegSmileWink className="Icons" style={{color: emojiOpen ? "#009688" : "#919191"}}/>
                </IconButton>
                <IconButton>
                    <AttachFile className="Icons"/>
                </IconButton>
                <form>
                    <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type a message"/>
                    <button /* onClick={sendMessage} */ type="submit">Escribe un mensaje aquí</button>
                </form>
                {input === "" ? 
                    <IconButton onClick={onClickMicro}>
                        <BiMicrophone className="Icons"  style={{color: listening ? "#126ecec" : "#919191"}}/>
                    </IconButton>
                    : 
                    <IconButton onClick={onClickMessage}>
                        <MdSend className="Icons"/>
                    </IconButton>
                }
            </div>          
        </div>
    );
}

export default Chat;
