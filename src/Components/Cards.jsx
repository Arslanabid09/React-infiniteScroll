import React from 'react';
import { data } from './Api';

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center md:place-items-start mt-10'>
      {data.map((item) => (
        <div 
          key={item._id} 
          className='w-full md:w-auto flex flex-col items-center md:items-start bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-4'>
          <img 
            src={item.photoUrl} 
            className=' md:w-full h-48 object-fill rounded-t-lg' 
            alt={item.name} 
            loading='lazy'
          />
          <h1 className='mt-2 text-lg font-semibold text-gray-800'>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
