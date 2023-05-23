import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import PopularMenu from './components/PopularMenu/PopularMenu';
import Featured from './components/Featured/Featured';
import Testimonials from './components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;