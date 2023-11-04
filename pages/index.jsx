import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

//DATA
import carsData from '../data/carsData';

//Component
import Cars from "../components/templates/cars/Cars";
import Categories from '../components/module/categories/Categories';
import Filter from '../components/module/filter/Filter';
import ShowAll from '../components/module/Show All/ShowAll';

const Index = () => {

  const filterData = carsData.slice( 0 ,3 );
  
  return (
    <div>
      <Categories />
      <Filter />
      <ShowAll />
      <Cars data={filterData} />
    </div>
  )
};

export default Index;