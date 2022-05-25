import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactImageMagnify from 'react-image-magnify';
import { Flip } from 'react-reveal';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePurchage from '../Shared/Hook/usePurchage/usePurchage';
import './Purchage.css'

const Purchage = () => {
    const { productsId } = useParams()
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    const [user] = useAuthState(auth);
    const [product] = usePurchage(productsId)

    var AvlOQ = product.Quantity
    var MinOQ = product.MOQ

    const onSubmit = (data) => {
        console.log(data)
        const MOQ = parseFloat(data?.MOQ) + parseFloat(product?.MOQ);
        const MOQDecrese = parseFloat(product?.MOQ) - parseFloat(data?.MOQ);
        console.log(MOQ)
        const update = { MOQ, MOQDecrese }
        const url = `
        https://calm-everglades-95109.herokuapp.com/products/${productsId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
            }
            )



        //  Post Method
        axios.post('https://calm-everglades-95109.herokuapp.com/orders', data)
            .then(response => {
                const data = response.data
                console.log(data)
                if (data.insertedId) {
                    toast('Your order is booked')
                    reset()
                }
            })

    }

    return (
        <div>
            <div className='serviceDetail-container p-2 text-center rounded-3 container' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className='zoom-img'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.picture
                        },
                        largeImage: {
                            src: product.picture,
                            width: 800,
                            height: 1200
                        }
                    }} />

                </div>

                <div className='zoom-description'>
                    <h2>Name : {product.name}</h2>
                    <h6>Price : ${product.PPU}<span className='text-xs'>/Unit</span></h6>
                    <h6>Available Quantity : {product.Quantity}</h6>
                    <h6>MOQ:{product.MOQ} <span className='text-xs'>/Minimum order quantity</span></h6>
                    <Flip right cascade><p> {product.Description}</p></Flip>
                </div>
            </div>


            <form className='lg:ml-80' onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={product.name}
                    {...register("productName")}
                /><br />

                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={user.displayName}
                    {...register("name", { required: true, maxLength: 40 })}
                /><br />

                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={user.email}
                    {...register("email")}
                /><br />

                <input
                    className=' input input-bordered input-primary w-full max-w-xs ' placeholder='Enter Your Address'
                    type="text" {...register("address",
                        {
                            required: {
                                value: true,
                                message: "Address is required"
                            },
                        })}
                /><br />
                <label className="label">
                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                </label>

                <input
                    className=' input input-bordered input-primary w-full max-w-xs ' placeholder='Enter Phone Number'
                    type="number" {...register("number",
                        {
                            maxLength: 15, required: {
                                value: true,
                                message: "Number is required"
                            },
                        })}
                /><br />
                <label className="label">
                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                </label>

                <input
                    className='mb-3  input input-bordered input-primary w-full max-w-xs ' placeholder='Update Quantity (+ , -)'

                    type="number" {...register("MOQ", { min: MinOQ, max: AvlOQ })}
                /> <br />
                {errors.number && (
                    <p className='text-red-500 text-sm'>You Must be order then MOQ and younger then Available Quantity</p>
                )}

                <input
                    className='mb-2 bg-slate-500 font-bold text-white text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    type="submit"
                    value="Order"
                />

            </form>
        </div>
    );
};

export default Purchage;