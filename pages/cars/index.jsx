import React from 'react';

//Component
import Cars from "../../components/templates/cars/Cars";
import Categories from '../../components/module/categories/Categories';

const Details = () => {
    return (
        <div>
          <Categories />
          <Cars />  
        </div>
    );
};

export default Details;