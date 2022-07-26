import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Reviews from '../Reviews/Reviews';
import './AddReview.css'

const AddReview = () => {
    const [user, loading] = useAuthState(auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log("form result", data)
        const url = `https://infinite-citadel-42199.herokuapp.com/reviews`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                if (result) {
                    toast.success('Comment Add Sucessfully')
                }
            }
            )
    };
    return (
        <div className='add-review my-auto flex items-center'>

            <div>
                {user ? (<div className='reviewContainer '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='inputStyle'
                            value={user?.displayName}
                            {...register("name", { required: true, maxLength: 20 })}
                        /> <br />

                        <input
                            value={user?.photoURL}
                            className='inputStyle'
                            placeholder='User Img'
                            type="text"{...register("picture")}
                        /><br />

                        <input
                            className='inputStyle'
                            placeholder='Enter Your ratings'
                            required
                            type="number" {...register("ratings", {
                                maxLength: {
                                    value: 5,
                                    message: 'Ratings not gratter then 5'
                                }, required: {
                                    value: true,
                                    message: "Ratings is required"
                                },
                            })}
                        /><br />
                        <label className="label">
                            {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                            {errors.ratings?.type > 'maxLength' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                        </label>


                        <textarea
                            className='textAreaStyle'
                            placeholder='Enter Your Comment'
                            required
                            {...register("reviews",
                                {
                                    maxLength: 250, required: {
                                        value: true,
                                        message: "Comment is required"
                                    },
                                })}
                        /><br />
                        <label className="label">
                            {errors.reviews?.type === 'required' && <span className="label-text-alt text-red-500">{errors.reviews.message}</span>}
                        </label>

                        <input
                            className='font-bold text-white bg-gradient-to-r from-secondary to-primary py-2 px-5 rounded-md'
                            type="submit"
                            value="Add Review"
                        />
                    </form>
                </div>

                )
                    :
                    (
                        <div>
                            <marquee className="text-xl bg-slate-300 rounded-md font-bold"
                                behavior="" direction=""> Share your thoughts with other customers
                            </marquee>

                            <p className='p-2 shadow-sm text-center text-2xl font-bold'>
                                <Link to="/signUp">
                                    Write a coustomer review
                                </Link>
                            </p>
                        </div>
                    )}
            </div>

            <div className='clint-review'>

                <Reviews></Reviews>

            </div>
        </div>
    );
};

export default AddReview;