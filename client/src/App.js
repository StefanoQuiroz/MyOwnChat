import React, { useState } from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import ChatIntro from './components/chat/ChatIntro';
import SideBar from './components/sideBar/SideBar';
//import Login from './components/login/Login';
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app">
     {/*  <Login/> */}
      <div className="wspBody"> 
        <SideBar activeChat={activeChat} setActiveChat={setActiveChat} />
        {(activeChat.id === undefined) ? <ChatIntro/> : <Chat />}
      </div>
    </div>
  );
}

export default App;
