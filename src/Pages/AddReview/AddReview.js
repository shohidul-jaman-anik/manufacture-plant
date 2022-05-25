import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReview.css'

const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/reviews`
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
                    toast('Comment Add Sucessfully')
                }
            }
            )
    };

    return (

        <div>
            <h1 className='comment-title'>Please Add  Review</h1>
            <div className='addreview'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='mb-3  input input-bordered input-primary w-full max-w-xs '
                        value={user.displayName}
                        {...register("name", { required: true, maxLength: 20 })}
                    /> <br />

                    <input
                        className='mb-3 input input-bordered input-primary w-full max-w-xs'
                        placeholder='Enter Your ratings'
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
                        {errors.ratings?.type >'maxLength' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    </label>

                    <input
                        value={user.photoURL}
                        className='mb-3  input input-bordered input-primary w-full max-w-x'
                        placeholder='User Img'
                        type="text"{...register("userImg")}
                    /><br />


                    <textarea
                        className='mb-2 rounded-md h-36 lg:w-96 text-center bg-slate-100 w-full max-w-xs'
                        placeholder='Enter Your Comment'
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
                        className='mb-2 bg-slate-500 font-bold text-white text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;