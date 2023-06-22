import React from 'react';
import Services from '../../Shared/Services/Services';
import HeaderBanner from '../HeaderBanner/HeaderBanner';

const Home = () => {
    return (
        <div>
            <div className='container-fuild'>
                <HeaderBanner></HeaderBanner>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;