import React from 'react';
import styles from './Login.module.scss';
import { Button } from '@material-ui/core';
/* import { Avatar } from '@material-ui/core';
import { BiUser } from "react-icons/bi"; */
const Login = () => {
    const registrarse = (event) => {

    }
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <form>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="iconWsp" />
                    <div className={styles.loginText}>
                        {/* <h1>Registrese aquí</h1> */}
                        <input type="text" placeholder="Ingrese su nombre aqui" />
                    </div>
                    <Button type="submit" className={styles.Button} onClick={event => registrarse(event)}>Registrarse con Google</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
