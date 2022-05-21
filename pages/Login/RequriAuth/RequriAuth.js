import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebaseinit';
import Loding from '../../Loding/Loding';

const RequireAuth = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    const location = useLocation();
    if (Loading) {
        return <Loding></Loding>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }}></Navigate>
    }
    return children;
};

export default RequireAuth;