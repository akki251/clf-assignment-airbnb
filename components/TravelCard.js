/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import moment from 'moment';

const TravelCard = ({ place }) => {
  return (
    <div>
      <div className="shadow-md rounded-xl mx-auto overflow-hidden relative lg:h-[300px] md:h-[200px] ">
        <div className="absolute top-5 right-5">
          <AiOutlineHeart
            size={25}
            className="cursor-pointer hover:scale-125 transform transition-all duration-200"
            color="white"
          />
        </div>
        <img src={place.images[0]} className="object-cover w-full h-full " alt={place.title} />
      </div>
      <div className="py-2 flex flex-col space-y-1">
        <h3 className="font-semibold text-xl">{place.title}</h3>
        <h2 className="font-thin text-gray-400">{place.localizedDistanceText}</h2>
        <div className="flex  space-x-2 text-gray-700 font-thin text-xs">
          <span>{moment(place.checkin).format('MMM Do ')}-</span>
          <span>{moment(place.checkout).format('MMM Do ')}</span>
        </div>
        <h3 className="font-bold ">{place.accessibilityLabel}</h3>
      </div>
    </div>
  );
};

export default TravelCard;
