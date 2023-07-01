import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import TableView from './TableView';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewData, setReviewData] = useState([]);
    useTitle('My Reviews');

    useEffect(() => {
        const url = `https://reflexlia-review-server.vercel.app/user-reviews/${user?.uid}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then((response) => {
                if (response.status === 401 || response.status === 403) {
                    logOut();
                    toast.error('Token Invalid! Login Again');
                }
                return response.json();
            })
            .then((actualData) => {
                setReviewData(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [user?.uid, loading, logOut]);
    return (
        <div className='container mx-auto md:px-5 px-3 py-20'>
            <TableView reviewData={reviewData} setLoading={setLoading}></TableView>
        </div>
    );
};

export default MyReview;