/* eslint-disable @next/next/no-img-element */
import React from 'react';

import axios from 'axios';
import { TravelCard } from '../components';

const Main = ({ places }) => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
        {places?.map((place) => (
          <TravelCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Main;
