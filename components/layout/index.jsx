import React from 'react';

//Style
import styles from "./Layout.module.scss";

//Component
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
           <Navbar /> 
           <div className={ styles.container } >
                { children }
           </div>
           <Footer /> 
        </div>
    );
};

export default Layout;