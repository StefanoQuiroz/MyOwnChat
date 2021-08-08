import React from 'react';
import './ChatIntro.scss';
import introIcon  from '../../images/introIcon.jpg';

const ChatIntro = () => {
    return (
        <div className="chatIntro">
            <img src={introIcon} alt=""/>
            <h1>Mantén tu teléfono conectado </h1>
            <h2>Who'sApp se conecta a tu teléfono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu teléfono a una red Wi-Fi</h2>         
        </div>
    );
}

export default ChatIntro;
