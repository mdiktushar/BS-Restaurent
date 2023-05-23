import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import PopularMenu from './components/PopularMenu/PopularMenu';
import Featured from './components/Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
        </div>
    );
};

export default Home;