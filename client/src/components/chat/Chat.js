import React, { useEffect, useRef, useState } from 'react';
import './Chat.scss'; 
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import { FaRegSmileWink } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSend, MdClose} from "react-icons/md";
import EmojiPicker from 'emoji-picker-react';
import MessageItem from '../messageItem/MessageItem';

const Chat = (props) => {

    const {user} = props;
    const name = useRef();
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
    const [listMessages, setListMessages] = useState([
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"},
        {name:123, message: "Hola como va?1"},
        {name: 123, message: "Hola como va?2"},
        {name: 1234, message: "Hola como va?3"}
    ]);
    
    //Para enviar al último chat de cada sala
    useEffect(()=>{
        if(name.current.scrollHeight > name.current.offsetHeight){
            name.current.scrollTop = name.current.scrollHeight - name.current.offsetHeight;
        }
    }, [listMessages]);

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

            {/* HEADER */}

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

            {/* BODY */}

            <div ref={name} className="chatBody">
                {listMessages && listMessages.map((item, index) => (
                    <MessageItem
                        key={index}
                        data={item}
                        user={user}
                    />
                ))}
            </div>


            <div className="chatEmoji" style={{height: emojiOpen ? "14rem" : "0rem" }}>
                <EmojiPicker disableSearchBar disableSkinTonePicker onEmojiClick={onEmojiClick}/>        
            </div>

            {/*FOOTER */}

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
                    <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe un mensaje aquí"/>
                    <button /* onClick={sendMessage} */ type="submit">Escribe un mensaje aquí</button>
                </form>
                {input === "" ? 
                    <IconButton onClick={onClickMicro}>
                        <BiMicrophone className="Icons"  style={{color: listening ? "#126ece" : "#919191"}}/>
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
