/* eslint-disable @next/next/no-img-element */
import React from 'react';

import axios from 'axios';
import { TravelCard } from '../components';

const Main = ({ places }) => {
  let data = {
    data: [
      {
        avgRating: null,
        listingBathroomLabel: '3 baths',
        bathrooms: 3,
        listingBedLabel: '4 beds',
        bedrooms: 3,
        beds: 4,
        businessHostLabel: null,
        city: 'Salobreña',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '6 guests',
        id: '584469386220279136',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: false,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '7,578 kilometers',
        locationTitle: 'Salobreña, Andalucía',
        locationContext: null,
        listingName: 'Casa Acantilado',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Salobreña, Andalucía, Spain',
        reviews: null,
        reviewsCount: 0,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Villa',
        starRating: null,
        summary: null,
        wishlistedCount: null,
        title: 'Salobreña, Spain',
        avgRatingLocalized: 'New',
        accessibilityLabel: '$518 per night',
        concatQualifierLeft: false,
        price: '$518',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2023-01-03',
        checkout: '2023-01-08',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/458c1368-f535-4d3d-a581-5c1c2a75ea01.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720',
        ],
      },
      {
        avgRating: 4.87,
        listingBathroomLabel: '2 baths',
        bathrooms: 2,
        listingBedLabel: '2 beds',
        bedrooms: 2,
        beds: 2,
        businessHostLabel: null,
        city: 'Abiansemal',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '4 guests',
        id: '34113796',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '5,565 kilometers',
        locationTitle: 'Abiansemal, Bali',
        locationContext: null,
        listingName: 'Aura House 2bds Eco Bamboo House, Pool, River View',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Abiansemal, Bali, Indonesia',
        reviews: [],
        reviewsCount: 142,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Villa',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Abiansemal, Indonesia',
        avgRatingLocalized: '4.87',
        accessibilityLabel: '$360 per night',
        concatQualifierLeft: false,
        price: '$360',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2023-07-09',
        checkout: '2023-07-16',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f4f7b242-db33-46fc-9080-c3d6a6fd55ec.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/4756e699-f474-4ca7-8b77-06b12715a6cb.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/fca892a4-3481-4ad1-9f92-404feaa42e9f.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/36d8007a-0de5-439d-9fec-1c2d7b53a147.jpeg?im_w=720',
        ],
      },
      {
        avgRating: 5,
        listingBathroomLabel: '4.5 baths',
        bathrooms: 4.5,
        listingBedLabel: '5 beds',
        bedrooms: 5,
        beds: 5,
        businessHostLabel: null,
        city: 'Abiansemal',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '10 guests',
        id: '34605588',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '5,565 kilometers',
        locationTitle: 'Abiansemal, Bali',
        locationContext: null,
        listingName: 'Sharma Springs 5 bds Luxurious Bamboo Mansion Pool',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Abiansemal, Bali, Indonesia',
        reviews: [],
        reviewsCount: 48,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Villa',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Abiansemal, Indonesia',
        avgRatingLocalized: '5.0',
        accessibilityLabel: '$1,200 per night',
        concatQualifierLeft: false,
        price: '$1,200',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-12-13',
        checkout: '2022-12-19',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/6a6ef3de-279e-48ae-83eb-97d748475dd9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/6cebb50e-cc06-441f-b124-598ff9f7c3c6.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/9ee15529-6596-4b96-95e5-06777bfed126.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/3e12fc94-b71b-4e11-b924-1a4de06ceb5c.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/d91b74b6-e49d-418d-a742-13a3c45a3f18.jpg?im_w=720',
        ],
      },
      {
        avgRating: 4.96,
        listingBathroomLabel: '1 bath',
        bathrooms: 1,
        listingBedLabel: '1 bed',
        bedrooms: 1,
        beds: 1,
        businessHostLabel: null,
        city: 'Hella',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '2 guests',
        id: '42164367',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '8,274 kilometers',
        locationTitle: 'Hella',
        locationContext: null,
        listingName: 'Glass cottage with Hot tub "Blár"',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Hella, Iceland',
        reviews: [],
        reviewsCount: 236,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Tiny home',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Hella, Iceland',
        avgRatingLocalized: '4.96',
        accessibilityLabel: '$525 per night',
        concatQualifierLeft: false,
        price: '$525',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2023-04-09',
        checkout: '2023-04-16',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/80385d19-c9dc-4dda-9d80-e16e55a8a6fd.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/ade2f12c-d3b2-4c66-9b0d-39fa8a772c9e.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42164367/original/f59bd4b0-e34c-42fc-b921-934c1d8cefd4.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42164367/original/f982ef05-5cdd-449f-9a08-e3f6e249adcf.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42164367/original/40e333c5-609e-45db-ae60-a9f09bfa772c.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-42164367/original/053c2bd0-5db2-46af-9c77-40e6bdea940b.jpeg?im_w=720',
        ],
      },
      {
        avgRating: 4.79,
        listingBathroomLabel: '1 bath',
        bathrooms: 1,
        listingBedLabel: '3 beds',
        bedrooms: 2,
        beds: 3,
        businessHostLabel: null,
        city: 'Akureyri',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '4 guests',
        id: '1083329',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '8,130 kilometers',
        locationTitle: 'Akureyri, Northeast',
        locationContext: null,
        listingName: 'Amazing view - Moderne apartment',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Akureyri, Northeast, Iceland',
        reviews: [],
        reviewsCount: 576,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Apartment',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Akureyri, Iceland',
        avgRatingLocalized: '4.79',
        accessibilityLabel: '$184 per night',
        concatQualifierLeft: false,
        price: '$184',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-11-30',
        checkout: '2022-12-05',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/09cef96b-3288-4a5d-a9c5-16bc857379e9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/b6491587-80c2-42c1-a89b-1dd2f5f95071.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/25625125/9d06ac17_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/93273c59-77e6-4e4d-8616-e6c10314f527.jpg?im_w=720',
        ],
      },
      {
        avgRating: 4.99,
        listingBathroomLabel: 'Half-bath',
        bathrooms: 0.5,
        listingBedLabel: '1 bed',
        bedrooms: 1,
        beds: 1,
        businessHostLabel: null,
        city: 'Gaular',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '2 guests',
        id: '41004219',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '6,947 kilometers',
        locationTitle: 'Gaular, Sogn og Fjordane',
        locationContext: null,
        listingName: 'Breathtaking Mountain views in cozy Birdbox',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Gaular, Sogn og Fjordane, Norway',
        reviews: [],
        reviewsCount: 137,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Treehouse',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Gaular, Norway',
        avgRatingLocalized: '4.99',
        accessibilityLabel: '$413 per night',
        concatQualifierLeft: false,
        price: '$413',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-12-04',
        checkout: '2022-12-09',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/6721fc25-afe0-4f35-b181-212ec8ddc186.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/7a7f8828-57cc-4fa5-b7ff-ae06bf8409a9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/23a60113-a16d-4cd6-bf5a-a2f352eb4f4e.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/4568c35b-bb8c-4367-b828-8f17bcea5934.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/1d22ab4c-641d-47d6-89fd-7c0418274ce7.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/8ce649cd-a9fc-4c83-9c62-a75e31acc473.jpg?im_w=720',
        ],
      },
      {
        avgRating: 4.75,
        listingBathroomLabel: '3 baths',
        bathrooms: 3,
        listingBedLabel: '5 beds',
        bedrooms: 4,
        beds: 5,
        businessHostLabel: null,
        city: 'El Port de la Selva',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '10 guests',
        id: '3524556',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: false,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '6,945 kilometers',
        locationTitle: 'El Port de la Selva, Catalonia',
        locationContext: null,
        listingName: 'Sunflower House',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'El Port de la Selva, Catalonia, Spain',
        reviews: [],
        reviewsCount: 134,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Home',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'El Port de la Selva, Spain',
        avgRatingLocalized: '4.75',
        accessibilityLabel: '$401 per night',
        concatQualifierLeft: false,
        price: '$401',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-11-13',
        checkout: '2022-11-18',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/81723679/e5e479c0_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/81723649/cb11466a_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/62155089/67d8d207_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/81723620/15e2c8cb_original.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/81723669/95b975f3_original.jpg?im_w=720',
        ],
      },
      {
        avgRating: 4.81,
        listingBathroomLabel: '1 bath',
        bathrooms: 1,
        listingBedLabel: '1 bed',
        bedrooms: 1,
        beds: 1,
        businessHostLabel: null,
        city: 'Sindun-myeon, Icheon-si',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '2 guests',
        id: '45694252',
        isAutoTranslated: true,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '5,638 kilometers',
        locationTitle: 'Sindun-myeon, Icheon-si, Gyeonggi-do',
        locationContext: null,
        listingName: 'Emotional Healing in Lee Cheon-si, Seoul',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Sindun-myeon, Icheon-si, Gyeonggi-do, South Korea',
        reviews: [],
        reviewsCount: 116,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Cottage',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Sindun-myeon, Icheon-si, South Korea',
        avgRatingLocalized: '4.81',
        accessibilityLabel: '$79 per night',
        concatQualifierLeft: false,
        price: '$79',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-09-25',
        checkout: '2022-09-30',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/1f130ae2-d79c-4630-a56e-b04abcd5557e.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/9a31f560-0d8a-40ed-8522-92cdac7aa9c7.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/feec013a-0471-4806-b7aa-605f21279b6b.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/8db2283f-9f6c-4160-afb4-6f23b06c4217.jpg?im_w=720',
        ],
      },
      {
        avgRating: 4.95,
        listingBathroomLabel: '1 bath',
        bathrooms: 1,
        listingBedLabel: '1 bed',
        bedrooms: 1,
        beds: 1,
        businessHostLabel: null,
        city: 'Drimnin',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '2 guests',
        id: '19997279',
        isAutoTranslated: false,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '7,575 kilometers',
        locationTitle: 'Drimnin, Scotland',
        locationContext: null,
        listingName: 'Unique and Secluded AirShip with Breathtaking Highland Views',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Drimnin, Scotland, United Kingdom',
        reviews: [],
        reviewsCount: 310,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Tiny home',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Drimnin, UK',
        avgRatingLocalized: '4.95',
        accessibilityLabel: '$223 per night',
        concatQualifierLeft: false,
        price: '$223',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-11-21',
        checkout: '2022-11-27',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: true,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/4588d88f-0224-42f4-94cb-594f4d362fba.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/150e47d8-76b8-4233-8724-cbbd12880848.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/fceeaee2-bbe7-4ba8-b0b8-06863e70017a.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/a855fd1a-7bee-4d8a-8c71-2e20e1647a20.jpg?im_w=1200',
        ],
      },
      {
        avgRating: 4.98,
        listingBathroomLabel: '1 bath',
        bathrooms: 1,
        listingBedLabel: '1 bed',
        bedrooms: 1,
        beds: 1,
        businessHostLabel: null,
        city: 'Harlingen',
        configurableContent: null,
        contextualPicturesPageInfo: {
          hasNextPage: true,
          endCursor: 'NQ==',
        },
        emergencyMessage: null,
        listingFloatingMessage: null,
        formattedBadges: [],
        listingGuestLabel: '2 guests',
        id: '42850678',
        isAutoTranslated: true,
        isNewListing: false,
        isSuperhost: true,
        relaxedFilterLabels: null,
        localizedCityName: null,
        localizedDistanceText: '6,832 kilometers',
        locationTitle: 'Harlingen, Friesland',
        locationContext: null,
        listingName: 'Luxury suite overlooking the Wadden Sea, Harlingen',
        listingObjType: 'REGULAR',
        neighborhood: null,
        listingPreviewAmenityNames: [],
        previewTags: [],
        publicAddress: 'Harlingen, Friesland, Netherlands',
        reviews: [],
        reviewsCount: 47,
        richKickers: null,
        roomType: 'Entire home/apt',
        roomTypeCategory: 'entire_home',
        roomTypeId: null,
        spaceType: 'Tower',
        starRating: 5,
        summary: null,
        wishlistedCount: null,
        title: 'Harlingen, Netherlands',
        avgRatingLocalized: '4.98',
        accessibilityLabel: '$371 per night',
        concatQualifierLeft: false,
        price: '$371',
        qualifier: 'night',
        trailingContent: null,
        adults: 1,
        children: 0,
        infants: 0,
        checkin: '2022-11-27',
        checkout: '2022-12-02',
        relaxedAmenityIds: null,
        categoryTag: 'Tag:8225',
        pets: 0,
        verified: {
          enabled: false,
          badgeText: 'Plus',
          badgeSecondaryText: 'Verified',
          kickerBadgeType: 'filled',
        },
        images: [
          'https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/d0fa428d-b0f7-4e4a-93d9-f2e702133e48.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/ad86a7fc-c061-417a-99f0-d0f1d841f28f.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/4119dad5-30be-4e72-844e-a7343046070c.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/87ff9bf9-5dfb-4d80-90cd-6cc61a08773e.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=720',
        ],
      },
    ],
  };

  places = data.data;
  return (
    <div className="max-w-7xl mx-auto px-3 py-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
        {places.map((place) => (
          <TravelCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Main;