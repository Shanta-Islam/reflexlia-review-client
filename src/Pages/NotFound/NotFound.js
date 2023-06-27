import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='bg-neutral-800'>
            <section className="dark:bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-500 md:text-4xl">Error 404- page not found</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">The page you requested could not be found.</p>
                        <Button color="gray" className='mx-auto'><Link to="/">Back to Homepage</Link></Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notfound;