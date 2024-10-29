import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Hello from home</h1>
            {/* for showing nested components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;