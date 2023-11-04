import React from 'react';

//Style
import styles from "./Cars.module.scss";

//Component
import Card from '../../module/card/Card';

const Cars = ({ data }) => {
    return (
        <div className={ styles.cars } >
            {
                data.map(car => <Card key={car.id} { ...car } />)
            }
        </div>
    );
};

export default Cars;