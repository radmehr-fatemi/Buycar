import React from 'react';

//ICON
import Location from "../../icons/Location";

//Style
import styles from "./Card.module.scss";

const Card = (props) => {

    const { category, description, distance, id, image, location, model, name, price, year } = props;

    return (
        <div className={styles.card} >

            <div className={styles.field1} >
                <img src={image} alt="car photo" />
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