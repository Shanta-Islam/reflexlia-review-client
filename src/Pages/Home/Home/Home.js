import React from 'react';
import Services from '../../Shared/Services/Services';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import useTitle from '../../../hooks/useTitle';

const Home = ({datasize}) => {
    useTitle('Home');
    return (
        <div>
            <div className='container-fuild'>
                <HeaderBanner></HeaderBanner>
            </div>
            <div>
                <About></About>
                <Services datasize={datasize}></Services>
                <ReviewSlider></ReviewSlider>
            </div>
        </div>
    );
};

export default Home;