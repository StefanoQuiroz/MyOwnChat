import React, { useState } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom' ;
import { Button } from '@material-ui/core';
/* import { Avatar } from '@material-ui/core';
import { BiUser } from "react-icons/bi"; */
const Login = () => {
    const history = useHistory();
    const onRegister = () => {
        history.push(`/home`);
    }
    return (
        <div className="login">
            <div className="loginContainer">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="iconWsp" />
                </div>
                <Button type="submit" onClick={onRegister}>Registrase con Google</Button>
            </div>
        </div>
    );
}

export default Login;
