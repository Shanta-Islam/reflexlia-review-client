import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceViewCard = ({ service }) => {
    return (
        <Card
            imgAlt="service-img"
            imgSrc={service.img}>
            <a href="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                </h5>
                <p className='text-gray-900 dark:text-white'>
                    {service.description.slice(0, 100)} ...
                </p>
            </a>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ৳ {service.price}
                </span>
                <Link to={`/service/${service._id}`}>
                    <Button color='gray'>Show Details</Button>
                </Link>
                
            </div>
        </Card>
    );
};

export default ServiceViewCard;