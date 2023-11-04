import React from 'react';
import { useRouter } from 'next/router';

//Style
import styles from "./ShowFiltered.module.scss";

// ICON
import Back from "../../icons/Back";

//Component
import Card from '../../module/card/Card';

const ShowFiltered = ({ filterData }) => {

    const router = useRouter();

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

export default ShowFiltered;