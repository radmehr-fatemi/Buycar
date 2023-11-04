import { useRouter } from 'next/router';
import React from 'react';

//Style
import styles from "./ShowAll.module.scss";

const ShowAll = () => {

    const router = useRouter();
    
    return (
        <div className={ styles.button } >
            <button onClick={ () => router.push("/cars") } >See all the cars</button>
        </div>
    );
};

export default ShowAll;