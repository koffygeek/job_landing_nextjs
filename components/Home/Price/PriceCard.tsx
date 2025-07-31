import React from 'react';
import { BiCheck } from 'react-icons/bi';

type Props = {
    type: string;
    price: string;
};

const PriceCard = ({ price, type }: Props) => {
    return (
        <div className='bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative'>
            {/* Type check for recommend bedge  */}
            {type === 'Standard' && (
                <div className='absolute top-7 right-7 px-6 py-1.5 bg-green-800 text-white rounded-full text-xs'>
                    Recommend
                </div>
            )}

            {/* Type  */}
            <h1 className='mt-6 text-xl font-bold text-blue-900 dark:text-blue-200'>
                {type} Package
            </h1>

            {/* Price */}
            <div className='mt-3'>
                <span className='mt-2 text-3xl font-bold text-blue-900 dark:text-blue-200'>
                    ${price}
                    / Monthly
                </span>

                {/* Feature List  */}
                <div className='mt-12'>
                    <div className='flex items-center mb-6 space-x-1'>
                        <BiCheck className='w-7 h-7' />
                        <span className='text-gray-700 dark:text-gray-300'>
                            1 Job Posting
                        </span>
                    </div>
                    <div className='flex items-center mb-6 space-x-1'>
                        <BiCheck className='w-7 h-7' />
                        <span className='text-gray-700 dark:text-gray-300'>
                            0 feature job
                        </span>
                    </div>
                    <div className='flex items-center mb-6 space-x-1'>
                        <BiCheck className='w-7 h-7' />
                        <span className='text-gray-700 dark:text-gray-300'>
                            Job displayed for 20 days
                        </span>
                    </div>
                    <div className='flex items-center mb-6 space-x-1'>
                        <BiCheck className='w-7 h-7' />
                        <span className='text-gray-700 dark:text-gray-300'>
                            Premium Support
                        </span>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <div>
                <button className='w-full py-3 bg-blue-900/15 dark:bg-gray-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer'>
                    View profile
                </button>
            </div>
        </div>
    );
};

export default PriceCard;
