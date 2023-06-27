import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLoaderData } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLoaderData();
    if(loading){
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;