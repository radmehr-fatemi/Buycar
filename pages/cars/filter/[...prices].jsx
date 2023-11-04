import React from 'react';
import { useRouter } from 'next/router';

//DATA
import carsData from '../../../data/carsData';
import ShowFiltered from '../../../components/templates/ShowFiltered/ShowFiltered';

const FilterPrice = () => {

    const router = useRouter()
    const [ min ,max ] = router.query.prices;
    const filterCars = carsData.filter( car => car.price > min && car.price < max );
    console.log(filterCars)

    if ( !filterCars.length ) return <h1>Notfound</h1>

    return (
        <div>
            <ShowFiltered filterData={filterCars} />
        </div>
    )
};

export default FilterPrice;