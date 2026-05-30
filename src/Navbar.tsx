import React, {useEffect} from "react";
import styles from './styles/navbar.module.css'
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <ul className={styles.navbar}>
            <li className={styles.navbarItem}><Link to={"/"}>Home</Link></li>
        </ul>
    )
}

export default Navbar;