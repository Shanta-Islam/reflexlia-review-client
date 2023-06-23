import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

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
                <h2 class="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">Services</h2>
            </div>
            <ServiceCard datasize={datasize}></ServiceCard>
            <div className='w-fit mx-auto mb-6'>
                <Link onClick={ScrollToTop} to={`/services`}>
                    <div>
                        <button className="inline-flex text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            <div className='flex'>
                                <span>View All Services</span>
                            </div>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;