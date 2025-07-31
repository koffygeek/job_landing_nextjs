'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
    desktop: {
        breakpoint: { max: 1400, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Review = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading
                heading='Testimonials from Customers'
                subHeading='Lorem ipsum dolor sit amet elit, sed do eismund tempor'
            />

            <div className='w-[80%] mt-16 mx-auto'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    <ReviewCard
                        image='/images/u1.png'
                        title='Great Quality'
                        username='Jasica Doe'
                        userRole='App Develper'
                    />
                    <ReviewCard
                        image='/images/u2.png'
                        title='Awesome Work!'
                        username='Jason Doe'
                        userRole='Web Develper'
                    />
                    <ReviewCard
                        image='/images/u3.png'
                        title='Best Work!'
                        username='Jenny Doe '
                        userRole='Game Develper'
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Review;
