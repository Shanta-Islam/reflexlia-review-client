import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Button } from 'flowbite-react';

const Services = ({datasize}) => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }; 

    return (
        <div className='pt-16'>
            <div className='text-center'>
                <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">Services</h2>
            </div>
            <ServiceCard datasize={datasize}></ServiceCard>
            <div className='w-fit mx-auto mb-6'>
                <Link onClick={ScrollToTop} to={`/services`}>
                    <div>
                        <Button color='gray'>View All Services</Button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;