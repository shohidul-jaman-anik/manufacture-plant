import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)
    const onSubmit = (data, event) => {
        console.log(data)
        const url = `https://infinite-citadel-42199.herokuapp.com/products`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Item added Sucessfully')
                reset()

            }
            )
    };

    return (
        <div>
            <h1 className='comment-title'>Please Add  Products</h1>
            <div className='addreview'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='mb-3  input input-bordered input-primary w-full max-w-xs '
                        value={user.displayName}
                        {...register("adminName", { required: true, maxLength: 25 })}
                    /> <br />
                    <input
                        className='mb-3  input input-bordered input-primary w-full max-w-xs '
                        value={user.email}
                        {...register("email")}
                    /> <br />

                    <input
                        className='mb-3 input input-bordered input-primary w-full max-w-xs'
                        placeholder='Enter Product Name'
                        type="text" {...register("name")}
                    /><br />
                    <input
                        className='mb-3 input input-bordered input-primary w-full max-w-xs'
                        placeholder='Enter Price Per Unit'
                        type="number" {...register("PPU")}
                    /><br />
                    <input
                        className='mb-3 input input-bordered input-primary w-full max-w-xs'
                        placeholder='Enter Minimum Order Quantity'
                        type="number" {...register("MOQ")}
                    /><br />

                    <input
                        className='mb-3  input input-bordered input-primary w-full max-w-x'
                        placeholder='Enter Img url'
                        type="text"{...register("picture")}
                    /><br />


                    <textarea
                        className='mb-2 rounded-md h-36 lg:w-96 text-center bg-slate-100 w-full max-w-xs'
                        placeholder='Enter Product Details'
                        {...register("Description",
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

export default AddProducts;