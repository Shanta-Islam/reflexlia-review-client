import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, Card, Modal, Spinner, TextInput, Textarea } from 'flowbite-react';
import ReviewsView from './ReviewsView';
import { toast } from 'react-hot-toast';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState([]);
    const [toggleModal, setToggleModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const url = `http://localhost:5000/service-reviews?serviceID=${serviceDetails._id}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setServiceReviews(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [serviceDetails._id, loading]);

    const handleWriteReview = () => {
        if (!user) {
            toast.error("Please Login To Add a Review");
        }
        else {
            setToggleModal(true);
        }
    }
    const modalClose = () => {
        setToggleModal(false);
    }
    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email || 'unregistered';
        const reviewMsg = form.reviewmsg.value;
        const userphoto = form.userphoto.value;
        console.log(username, reviewMsg, email, userphoto);

        const review = {
            service_id: serviceDetails._id,
            service_name: serviceDetails.title,
            review_message: reviewMsg,
            review_date: new Date().getTime(),
            reviewer_info: {
                userID: user?.uid,
                userName: username,
                userEmail: user?.email,
                userPhoto: userphoto
            }
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    setToggleModal(false);
                    setLoading(true);
                    toast.success("Review Added Successfully");
                }
            })
            .catch(err => toast.error("Review Not Added"))

    }
    return (
        <PhotoProvider>
            <div className='container mx-auto md:px-5 px-3 mb-5 mt-5'>
                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card className='bg-opacity-0 border-2'>
                        <PhotoView src={serviceDetails.img}>
                            <img className='object-cover h-96 w-full rounded-lg' src={serviceDetails.img} alt="" />
                        </PhotoView>
                        <div>
                            <h5 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
                                {serviceDetails.title}
                            </h5>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-gray-800 dark:text-white'>About This Service</p>
                            <p className="font-normal text-gray-800 dark:text-white ">
                                {serviceDetails.description}
                            </p>
                        </div>
                        <div className="flex flex-col mt-5 md:mt-3">
                            <p>
                                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                                    <span className='text-3xl text-gray-800 font-extrabold mr-1 dark:text-white'>৳</span>{serviceDetails.price} BDT
                                </span>
                            </p>
                        </div>
                    </Card>
                    <Card className='mt-5'>
                        <div className='items-center justify-between mt-2'>
                            <div>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div>
                                        <p className='text-3xl font-semibold text-gray-800 dark:text-white'>Reviews</p>
                                    </div>
                                    <button onClick={() => handleWriteReview()} className="justify-center text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mt-4 md:mt-0">
                                        <div className='flex items-center justify-center'>
                                            <span>Write Your Review</span>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <Spinner
                                            className={loading ? 'block' : 'hidden'}
                                            aria-label="Extra large spinner example"
                                            size="md"
                                        />
                                    </div>
                                </div>
                                <div className={!(serviceReviews.length <= 0) ? 'hidden' : 'block'}>
                                    <p className='text-2xl font-semibold text-gray-500 text-center mt-12 mb-12'>No Reviews Yet Added</p>
                                </div>
                                {serviceReviews.map(review => <ReviewsView key={review._id} review={review} setLoading={setLoading}></ReviewsView>)}
                            </div>
                        </div>
                        <React.Fragment>
                            <Modal
                                show={(toggleModal) ? true : false}
                                size="md"
                                popup={true}
                                onClose={modalClose}
                            >
                                <Modal.Header className='bg-gray-800 border-2 border-b-0 rounded-t-lg' />
                                <Modal.Body className='bg-gray-800 border-2 border-t-0 rounded-b-lg'>
                                    <form onSubmit={handleSubmitReview}>
                                        <div className="space-y-6 px-0 pb-4 sm:pb-6 lg:px-5 xl:pb-8">
                                            <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                                                Write A Review
                                            </h3>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your Name</span>
                                                </div>
                                                <TextInput id="username"
                                                    name='username'
                                                    placeholder={user?.displayName ? user.displayName : 'Unnamed User'}
                                                    value={user?.displayName ? user.displayName : 'Unnamed User'}
                                                    required={true}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your email</span>
                                                </div>
                                                <TextInput
                                                    className='cursor-not-allowed'
                                                    id="email"
                                                    name='email'
                                                    placeholder={user?.email}
                                                    value={user?.email}
                                                    required={true}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your Review</span>
                                                </div>
                                                <Textarea
                                                    id="reviewmsg"
                                                    name="reviewmsg"
                                                    placeholder="Leave a review massage..."
                                                    required={true}
                                                    rows={4}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    className='hidden'
                                                    id="userphoto"
                                                    name="userphoto"
                                                    value={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'}
                                                    hidden
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Button type="submit" color='gray'>
                                                    Submit Review
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </React.Fragment>
                    </Card>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetails;