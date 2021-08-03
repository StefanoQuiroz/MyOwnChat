import React, { useEffect, useState } from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import SideBar from './components/sideBar/SideBar';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get(`/api/messages/sync`)
      .then(response => setMessages(response.data.data))
      .catch(err => console.log(err));
  },[])

  
  useEffect(()=>{
    const pusher = new Pusher('dad86e5da3fa7bc1b1d8', {
      cluster: 'eu'
    });
    
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
      setMessages([...messages, data])
    });
    
    //funcion para limpiar, evita la saturacion de la data
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])
  
  console.log(messages);
  
  return (
    <div className="app">
      <div className="wspBody">
        <SideBar/>
        <Chat/>  
      </div>
    </div>
  );
}

export default App;
