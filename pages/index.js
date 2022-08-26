/* eslint-disable @next/next/no-page-custom-font */
import axios from 'axios';
import Head from 'next/head';
import { NavBar, Footer, Category } from '../components';

import Main from './Main';

export default function Home({ places , categories }) {
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link href="http://fonts.cdnfonts.com/css/circular-std" rel="stylesheet" />
      </Head>
      <NavBar categories = {categories} />
      <Main places={places} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/searchProperty',
    params: { category: 'TAB_8225', totalRecords: '10', currency: 'USD', adults: '1' },
    headers: {
      'X-RapidAPI-Key': 'ec8373c351msh16435922a425c26p135a6djsnc947da051108',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
    },
  };

  let places = null;
  try {
    const response = await axios.request(options);
    places = await response.data.data;
  } catch (error) {
    console.log(error);
  }

  let categories = null;

  const optionsCategory = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/getCategory',
    headers: {
      'X-RapidAPI-Key': 'ec8373c351msh16435922a425c26p135a6djsnc947da051108',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(optionsCategory);
    categories = await response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { places, categories },
  };
}
