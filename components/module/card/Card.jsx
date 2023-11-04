import React from 'react';
import Link from 'next/link';

//ICON
import Location from "../../icons/Location";

//Style
import styles from "./Card.module.scss";

const Card = (props) => {

    const { distance, id, image, location, model, name, price, year } = props;

    return (
        <div className={styles.card} >

            <div className={styles.field1} >
           <Link href={`/cars/${id}`} ><img src={image} alt="car photo" /></Link>
            </div>

            <div className={styles.field2} >
                <p> {name} {model} </p>
                <span> {year} . {distance}km </span>
            </div>

            <div className={styles.field3} >
                <span> {price} $ </span>
                <p>
                    {location}
                    <Location />
                </p>
            </div>
        </div>
    );
};

export default Card;