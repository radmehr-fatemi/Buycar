import React from 'react';
import { useRouter } from 'next/router';

//Style
import styles from "./Category.module.scss";

// DATA
import carsData from '../../../data/carsData';

// ICON
import Back from "../../icons/Back";

//Component
import Card from '../../../components/module/card/Card';

const Category = () => {

    const router = useRouter();
    const filterData = carsData.filter(car => car.category == router.query.category);

    return (
        <div className={styles.category} >
            <div className={styles.backField} >
                <span onClick={ () => router.back() } >
                    <Back />
                    Back
                </span>
            </div>

            <div className={ styles.cars } >
            {
                filterData.map(car => <Card key={car.id} {...car} />)
            }
            </div>
        </div>
    );
};

export default Category;