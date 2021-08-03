import React from 'react'
import styles from './SideBarChat.module.scss';
import { Avatar } from '@material-ui/core';

export default function SideBarChat() {
    return (
        <div className={styles.sideBarChat}>
            <Avatar/>
            <div className={styles.sideBarChatInfo}>
                <h2>Nombre</h2>
                <p>Mensaje de Prueba</p>
            </div>        
        </div>
    )
}
