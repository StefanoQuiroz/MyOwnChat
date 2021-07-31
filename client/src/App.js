import React from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import SideBar from './components/sideBar/SideBar';

function App() {
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
