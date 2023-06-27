import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const ReviewSlider = () => {
    const [usersReview, setUsersReview] = useState([]);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        fetch(`http://localhost:5000/service-reviews`)
            .then(res => res.json())
            .then(data => setUsersReview(data));
    }, [])

    return (
        <div className='container-fluid mt-20 py-20'>
            <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white text-center">What People Say</h2>
            <div className='mt-16'>
                <Slider {...settings}>
                    {usersReview.map((reviewShow) => (
                        <Card>
                            <div className="flex flex-col items-center pb-10 justify-center">
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {reviewShow.review_message}
                                </h5>
                                <img src={reviewShow.reviewer_info.userPhoto} alt="" className="w-8 h-8 mt-6"/>
                                <h5 className='text-gray-900 dark:text-white'>{reviewShow.reviewer_info.userName}</h5>
                                <p className='text-gray-900 dark:text-white'>{new Date(parseInt(reviewShow.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </Card>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default ReviewSlider;