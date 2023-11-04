import React from 'react';

//Style
import styles from "./Cars.module.scss";

//DATA
import carsData from '../../../data/carsData';

//Component
import Card from '../../module/card/Card';

const Cars = () => {
    return (
        <div className={ styles.cars } >
            {
                carsData.map(car => <Card key={car.id} { ...car } />)
            }
        </div>
    );
};

export default Cars;