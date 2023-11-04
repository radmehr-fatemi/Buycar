import React from 'react';

//Style
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={ styles.navbar } >
            <h1>BUYCAR</h1>
            <p>Choose and buy your car</p>
        </div>
    );
};

export default Navbar;