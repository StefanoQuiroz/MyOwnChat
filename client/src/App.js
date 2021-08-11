import React, { useState } from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import ChatIntro from './components/chat/ChatIntro';
import SideBar from './components/sideBar/SideBar';
import Login from './components/login/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [activeChat, setActiveChat] = useState({});
  //login
  const [user,setUser] = useState({
    id: 1234,
    avatar: "https://freepikpsd.com/media/2019/10/avatar-icon-png-3-Transparent-Images.png",
    name: "Stefano"
  });
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Login/>
          </Route>
          <Route path={`/home`}>
            <div className="wspBody">
              <SideBar activeChat={activeChat} setActiveChat={setActiveChat} user={user}/>
              {(activeChat.id === undefined) ? <ChatIntro/> : <Chat user={user} />}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
