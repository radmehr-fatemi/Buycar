import React from 'react';
import { useRouter } from 'next/router';

// DATA
import carsData from '../../../data/carsData';

//Component
import Category from '../../../components/templates/ShowFiltered/ShowFiltered';

const Model = () => {
    
    const router = useRouter();
    const filterData = carsData.filter(car => car.category == router.query.category);


    return <Category filterData={filterData}  />
};

export default Model;