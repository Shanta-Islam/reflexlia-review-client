import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/M1p6242/pexels-sam-forson-154243.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt="hero-img"
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full text-center m-40">
                            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Capture The Moments in Time
                            </h2>
                            <p className="mb-4 text-base text-gray-400 md:text-lg">
                            Sharing a moment in the form of a picture makes you feel connected to others.
                            </p>
                            <Link to="/services"><Button className='mx-auto' color="gray">Get Started</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;