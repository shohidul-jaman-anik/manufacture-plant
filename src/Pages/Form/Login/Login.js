import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import loginImg from '../../../Assets/form-illustrator/Sign in-pana.svg'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [resetEmail, setResetEmail] = useState('')
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
    );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading || sending) {
        return <Loading></Loading>
    }
    let loginError;
    if (error || ResetError) {
        loginError = <p className='text-red-500'>{error?.message}</p>
    }
    const onSubmit = (data) => {
        setResetEmail(data.email)
        signInWithEmailAndPassword(data.email, data.password)

    };

    const handleResetPass = async user => {

        if (resetEmail) {
            await sendPasswordResetEmail(resetEmail);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email')
        }
    }
    return (
        <div>
            <div className='loginContainer'>

                <div>
                    <img className='login-img ' src={loginImg} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="text-center">Login</h2>
                    <div className="lg:ml-16 form-control border-0">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your Email"
                            className="input input-bordered input-primary w-full max-w-xs "
                            // {...register("firstName", { required: true })}
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "E-mail is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid E-mail'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>

                    <div className="lg:ml-16 form-control  border-0">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full max-w-xs"
                            // {...register("firstName", { required: true })}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                        {loginError}
                    </div>

                    <input type="submit" className='lg:ml-20 ml-3 form-button text-white ' value="Login" />
                    <p className='text-center mt-2'><small>
                        New To Doctor  Portal ?
                        <Link className='text-primary ml-2'
                            to='/signUp'>Create New Account
                        </Link></small>
                    </p>

                    <p className='text-center'>Forget Password ? <span onClick={handleResetPass}>Reset Password</span></p>

                    <SocialLogin></SocialLogin>
                </form>

            </div>
        </div>
    );
};

export default Login;