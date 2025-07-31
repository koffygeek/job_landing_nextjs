'use client';
import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopCompanyCard from './TopCompanyCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CompanyData = [
  {
    id: 1,
    image: '/images/c1.png',
    name: 'Udemy',
    location: 'London, UK',
    position: '20'
  },
  {
    id: 2,
    image: '/images/c2.png',
    name: 'Stripe',
    location: 'Kolkata, India',
    position: '30'
  },
  {
    id: 3,
    image: '/images/c3.png',
    name: 'Dropbox',
    location: 'Lahore, Pakistan',
    position: '33'
  },
  {
    id: 4,
    image: '/images/c4.png',
    name: 'Figma',
    location: 'Dhaka, Bangladesh',
    position: '40'
  }
];

const TopCompany = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading
        heading='Top Company Registered'
        subHeading='Some of the companies we have helped recruit excellent candidates over the years.'
      />
      <div className='w-[80%] mx-auto mt-10 '>
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {CompanyData.map((data) => {
            return <TopCompanyCard key={data.id} data={data} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TopCompany;
