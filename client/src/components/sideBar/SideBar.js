import React from 'react';
import styles from './SideBar.module.scss';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { AiOutlineSearch } from "react-icons/ai";

import SideBarChat from '../sideBarChat/SideBarChat';

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarHeader}>
                <Avatar src="https://avatars.githubusercontent.com/u/72056993?v=4"/>
                <div className={styles.sideBarHeaderRight}>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            
            <div className={styles.sideBarSearch}>
                <div className={styles.sideBarSearchContainer}>
                    <AiOutlineSearch className={styles.Icon} />
                    <input type="text" placeholder="Busca un chat o inicia uno nuevo" />
                </div>
            </div>

            <div className={styles.sideBarChats}>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>
        </div>
    );
}

export default SideBar;
