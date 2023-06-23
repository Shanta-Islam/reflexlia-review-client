import React from 'react';
import Services from '../../Shared/Services/Services';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';

const Home = ({datasize}) => {
    return (
        <div>
            <div className='container-fuild'>
                <HeaderBanner></HeaderBanner>
            </div>
            <div>
                <About></About>
                <Services datasize={datasize}></Services>
            </div>
        </div>
    );
};

export default Home;