import React, { useEffect } from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import googleIcon from '../../../Assets/icon/google.svg'
import useToken from '../../Shared/Hook/useToken/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user)

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    
    let loginError;
    if (error) {
        loginError = <p className='text-red-500'>{error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card-body">
                <div className="divider">OR</div>
                {loginError}
                <button
                    onClick={() => signInWithGoogle()}
                    className="social-button">
                        <img src={googleIcon} alt="" />
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;