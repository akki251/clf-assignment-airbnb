/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Category = ({ categories }) => {
  return (
    <div className="pt-8  shadow-lg w-full sticky top-1 bg-white">
      <div className="max-w-7xl px-3  mx-auto flex space-x-10 overflow-x-scroll scrollbar-class ">
        {categories.map((item) => (
          <div
            key={item.id}
            className=" opacity-40 first:opacity-100 hover:opacity-100 w-[400px] pb-3  hover:border-b hover:border-gray-700 transition-all duration-150 border-b  border-opacity-0 hover:border-opacity-80 flex flex-col justify-center items-center  space-y-2 text-xs"
          >
            <div className="text-center">
              <img src={item.image} className="w-[30px]  mx-auto" alt={item.title} />
            </div>
            <p className="whitespace-nowrap"> {item.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
