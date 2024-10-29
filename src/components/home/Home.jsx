import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div style={{border:"1px solid black",padding:"10px"}}>
            <Header></Header>
            <h1>Hello from home</h1>
            {/* for showing nested components */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;