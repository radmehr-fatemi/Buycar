import React from 'react';

//Style
import styles from "./CarDetails.module.scss";

//ICON
import Compony from "../../icons/Company";
import Model from "../../icons/Model";
import Road from "../../icons/Road";
import Calender from "../../icons/Calender";
import Money from "../../icons/Money";
import Location from "../../icons/Location";

const CarDetails = (props) => {

    const { distance, id, image, location, model, name, price, year, description } = props;

    return (
        <div className={styles.carDetails} >
            <img src={image} alt="car photo" />

            <div className={styles.field1} >
                <h3> {name} {model} </h3>
            </div>

            <div className={styles.field2} >

                <div>
                    <p>
                        <Compony />
                        Compony
                    </p>
                    <span> {name} </span>
                </div>

                <div>
                    <p>
                        <Model />
                        Model
                    </p>
                    <span> {model} </span>
                </div>

                <div>
                    <p>
                        <Calender />
                        First registration
                    </p>
                    <span> {year} </span>
                </div>

                <div>
                    <p>
                        <Road />
                        Kms driven
                    </p>
                    <span> {distance} </span>
                </div>
            </div>

            <div className={styles.field3} >
                <div className={styles.location} >
                    <p>
                        <Location />
                        Location
                    </p>
                    <span> {location} </span>
                </div>
            </div>

            <div className={styles.field4} >
                <h4>Description:</h4>
                <p> {description} </p>
            </div>

            <div className={ styles.field5 } >
                <div className={styles.price} >
                    <p>
                        <Money />
                        Price
                    </p>
                    <span> {price} </span>
                </div>
            </div>

            <div className={ styles.field6 } >
                <button>Buy</button>
            </div>

        </div>
    );
};

export default CarDetails;