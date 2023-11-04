import React from 'react';

//DATA
import carsData from '../../data/carsData';

//Component
import Cars from "../../components/templates/cars/Cars";
import Categories from '../../components/module/categories/Categories';
import Filter from '../../components/module/filter/Filter';

const Details = () => {
    return (
        <div>
          <Categories />
          <Filter />
          <Cars data={carsData} />  
        </div>
    );
};

export default Details;