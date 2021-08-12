import React, { useState } from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import ChatIntro from './components/chat/ChatIntro';
import SideBar from './components/sideBar/SideBar';
import Login from './components/login/Login';
import login from './firebase/Api';
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [activeChat, setActiveChat] = useState({});
  
  //login
  //const [user,setUser] = useState( null
    /* {
      id: "7PoAroQGzV2HEyUHMzNg",
      name: "Stefano Quiroz",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GgxJWOJutjIsKUfPVUHXeJhytgfWp3J2tQlVaqp=s96-c",
    } */
  //);

  const [user,setUser] = useState({
    id: "gzI6x0LHmqed1QwsyWeQhvdMp3z1",
    name: "Stefano Quiroz",
    avatar: "https://lh3.googleusercontent.com/a-/AOh14GhXnrJEB2M6znsik28lK0szZJwN4lnNP0XgZEz1=s96-c"
  })

  //prueba
  /* const [user,setUser] = useState({
    id: 1234,
    avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png",
    name: "Stefano"
  }); */

  const loginData = async (usuario) => {
    let newUser = {
      id: usuario.uid,
      name: usuario.displayName,
      avatar: usuario.photoURL
    };
    await login.addUser(newUser);
    setUser(newUser);
  }
  

  if(user === null){
    return <Login onReceive={loginData}/>
  }

  return (
    <div className="app">
      <div className="wspBody">
        <SideBar activeChat={activeChat} setActiveChat={setActiveChat} user={user}/>
        {(activeChat.id === undefined) ? <ChatIntro/> : <Chat user={user} />}
      </div>
    </div>
  ); 
}

export default App;
