import React from 'react';
import styles from './SideBar.module.scss';
import { MdDonutLarge } from "react-icons/md";
const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarHeader}>
                <div className={styles.sideBarHeaderRight}>
                    <MdDonutLarge/>
                </div>
                <div className={styles.sideBarHeaderLeft}>

                </div>
                
            </div>
        </div>
    );
}

export default SideBar;
