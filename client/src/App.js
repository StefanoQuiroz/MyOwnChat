import React, { useState } from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import ChatIntro from './components/chat/ChatIntro';
import SideBar from './components/sideBar/SideBar';
import Login from './components/login/Login';
import login from './firebase/Api';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [activeChat, setActiveChat] = useState({});
  //login
  const [user,setUser] = useState(
    {
      id: "yLtxkiQQiFe68EM2SSwj6GxuCSD3",
      name: "Stefano Quiroz",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GgxJWOJutjIsKUfPVUHXeJhytgfWp3J2tQlVaqp=s96-c",
    }
  );

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
      <Router>
        <Switch>
          <Route path={`/`}>
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
