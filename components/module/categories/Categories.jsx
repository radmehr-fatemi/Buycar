import React from 'react';
import Link from 'next/link';

//Style
import styles from "./Categories.module.scss";

//ICON
import Suv from "../../icons/Suv";
import Sedan from "../../icons/Sedan";
import Hatchback from "../../icons/Hatchback";
import SportCar from "../../icons/Sport";

const Categories = () => {
    return (
        <div className={ styles.categories } >
            <Link href='./cars/categories/suv' >
                <div className={ styles.field } >
                    <span>Suv</span>
                    <Suv />
                </div>
            </Link>

            
            <Link href='./cars/categories/sedan' >
                <div className={ styles.field } >
                    <span>Sedan</span>
                    <Sedan />
                </div>
            </Link>

            <Link href='./cars/categories/hatchback' >
                <div className={ styles.field } >
                    <span>Hatchback</span>
                    <Hatchback />
                </div>
            </Link>

            <Link href='./cars/categories/sport' >
                <div className={ styles.field } >
                    <span>Sport Car</span>
                    <SportCar />
                </div>
            </Link>


        </div>
    );
};

export default Categories;