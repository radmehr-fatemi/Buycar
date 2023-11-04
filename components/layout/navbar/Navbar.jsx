import React from 'react';
import Link from 'next/link';

//Style
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <Link href='/' >
        <div className={ styles.navbar } >
            <h1>BUYCAR</h1>
            <p>Choose and buy your car</p>
        </div>
        </Link>
    );
};

export default Navbar;