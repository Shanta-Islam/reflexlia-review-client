import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='container mx-auto my-20 md:my-10 sm:my-5'>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto lg:mt-0 lg:col-span-7 lg:flex">
                    <img src="https://i.ibb.co/MR8HzBT/pexels-george-milton-7014433.jpg" alt="about img" className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className="place-self-center lg:col-span-5">
                    <h2 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">About</h2>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Time flies, as everyone knows, but the moment can be captured. Because every moment in important. Nicxelia is a photography website. This website will take you back to that beautiful moments.</p>
                </div>
            </div>
        </div>
    );
};

export default About;