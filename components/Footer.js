import React from 'react';
import { BiHeart, BiSearchAlt2 } from 'react-icons/bi';
import { FaUserCheck } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-3 flex items-center justify-center space-x-5 bg-white sm:flex lg:hidden sticky bottom-0 left-0 right-0 z-10">
      <div className="flex flex-col items-center space-y-2">
        <BiSearchAlt2 size={20} color="red" />
        <p className="font-semibold text-gray-800">Explore</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BiHeart size={20} />
        <p className="font-thin text-gray-500">Wishlists</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <FaUserCheck size={20} />
        <p className="font-thin text-gray-500">Log in</p>
      </div>
    </div>
  );
};

export default Footer;
