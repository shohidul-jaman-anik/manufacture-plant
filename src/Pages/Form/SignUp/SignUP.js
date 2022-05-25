import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Signup.css'
import SignUpImg from '../../../Assets/form-illustrator/Sign up-pana.svg'
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../Shared/Hook/useToken/useToken';

const SignUP = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let navigate = useNavigate();

    const [token] = useToken(user)

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [token,from, navigate])

    // if (user) {
    //     navigate('/')
    // }

    if (loading || updating) {
        return <Loading></Loading>
    }
    let loginError;
    if (error || updateError) {
        loginError = <p className='text-red-500'>{error?.message || error?.updateError}</p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log(data)
    }
    return (
        <div className='loginContainer'>

            <div>
                <img className='login-img ' src={SignUpImg} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className="text-center font-bold">Sign Up</h2>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered input-primary w-full max-w-xs "
                        // {...register("firstName", { required: true })}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>

                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type here"
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

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
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

                    <input type="submit" className='btn text-white bg-gradient-to-r from-secondary to-primary' value="SignUp" />
                </div>
                <p className='text-center mt-2'><small>
                    Already have an account ?
                    <Link className='text-primary ml-2'
                        to='/login'>Please login
                    </Link></small>
                </p>

                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default SignUP;
