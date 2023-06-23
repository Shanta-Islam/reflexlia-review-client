import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesPage = () => {
    return (
        <div className='py-20'>
            <h2 class="text-center  mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">All Services</h2>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default ServicesPage;