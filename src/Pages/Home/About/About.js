import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container mx-auto my-20 md:my-10 sm:my-5'>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto lg:mt-0 lg:col-span-7 lg:flex relative hidden lg:visible">
                    <img src="https://i.ibb.co/MR8HzBT/pexels-george-milton-7014433.jpg" alt="about img" className="w-96 rounded-lg shadow-2xl" />
                    <div className="absolute left-28 top-10 box-border h-96 w-80 p-4 border-4">
                        <img src="https://i.ibb.co/KzPCTYK/pexels-cottonbro-studio-3584992.jpg" alt="" className='w-80 absolute left-28 rounded-lg shadow-2xl' />
                    </div>
                </div>
                <div class="place-self-center lg:col-span-5">
                    <h2 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">About</h2>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Time flies, as everyone knows, but the moment can be captured. Because every moment in important. Nicxelia is a photography website. This website will take you back to that beautiful moments.</p>
                    <Link to="/about"><Button color='gray'>Get More Info</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;