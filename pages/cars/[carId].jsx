import React from 'react';
import { useRouter } from 'next/router';

//DATA
import carsData from '../../data/carsData';

//Component
import CarDetails from '../../components/templates/details/CarDetails';

const CarId = () => {

    const router = useRouter();
    const id = router.query.carId
    const data = carsData[id - 1];

    return (
        <div>
            <CarDetails { ...data } />
        </div>
    );
};

export default CarId;