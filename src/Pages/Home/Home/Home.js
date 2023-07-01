import React from 'react';
import Services from '../../Shared/Services/Services';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';
import useTitle from '../../../hooks/useTitle';
import Contact from '../Contact/Contact';

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
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;