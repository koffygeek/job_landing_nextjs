import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import PriceCard from './PriceCard';

const Price = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading
                heading='Pricing Packages'
                subHeading='Lorem ipsum dolor sit amet consectetur adipiscing elit.'
            />
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
                <div className=' '>
                    <PriceCard type="Basic" price="199" />
                </div>
                <div className=''>
                    <PriceCard type="Standard" price="199" />
                </div>
                <div className=' '>
                    <PriceCard type="Extended" price="199" />
                </div>
            </div>
        </div>
    );
};

export default Price;
