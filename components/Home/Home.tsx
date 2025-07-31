import React from 'react'
import Hero from './Hero/Hero'
import Category from './Category/Category'
import Job from './Job/Job'
import TopCompany from './TopCompany/TopCompany'
import Info from './Info/info'
import Price from './Price/Price'
import Review from './Review/Review'


const Home = () => {
    return (
        <div className='overflow-hidden h-[2000px]:'>
            <Hero />
            <Category />
            <Job />
            <TopCompany />
            <Info />
            <Price />
            <Review />
        </div>
    )
}

export default Home