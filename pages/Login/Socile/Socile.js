import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import Loding from '../../Loding/Loding';


const Socile = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading2) {
        return <Loding></Loding>
    }
    if (error || error2) {
        errorElement = <p className="text-danger">Error:{error?.message} {error2?.message}</p>
    }
    if (user || user2) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div className='border w-50'></div>
            </div>
            {errorElement}
            <div className='m-2'>
                <Button onClick={() => signInWithGoogle()} className='w-100 mx-auto submit-btn py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src='https://i.ibb.co/Z6NdH0C/google.png' alt="" />
                    Sing With Google
                </Button>
            </div>
            <div className='m-2'>
                <Button onClick={() => signInWithGithub()} className='w-100 mx-auto submit-btn py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src="https://i.ibb.co/wJ06cj4/github.png" alt="" />
                    Sing With Git Hub
                </Button>
            </div>
        </div>
    );
};

export default Socile;

