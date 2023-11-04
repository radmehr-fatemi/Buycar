import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Style
import styles from "./Filter.module.scss";

const Filter = () => {

    const [ min ,setMin ] = useState('');
    const [ max ,setMax ] = useState('');
    const router = useRouter()
    
    const searchHandler = e => {
        if ( min && max ) {
            router.push(`/cars/filter/${min}/${max}`)
        } else {
            toast.info("Please enter the price")
        }
    }

    return (
        <div className={ styles.filter } >
            <div className={ styles.inputs }>
                <input value={min} onChange={ e => setMin( e.target.value ) } type="text" placeholder='Inter min-price' />
                <input value={max} onChange={ e => setMax( e.target.value ) } type="text" placeholder='Inter max-price' />
            </div>
            <button className={ styles.button } onClick={ searchHandler } >Search</button>
            <ToastContainer style={{ padding: "0 .4rem" ,marginTop:"1rem" }} />
        </div>
    );
};

export default Filter;