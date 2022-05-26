import React from 'react';
import { Flip } from 'react-reveal';
import useProducts from '../Shared/Hook/useProduct/useProducts';
import Typed from 'react-typed';
import './ManageProducts.css'
import usePurchage from '../Shared/Hook/usePurchage/usePurchage';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const ManageProducts = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    const { productsId } = useParams()
    const [user] = useAuthState(auth);
    var [product1] = usePurchage(productsId)

    var AvlOQ = product1.Quantity
    var MinOQ = product1.MOQ

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
        }




        const [product, setProduct] = useProducts()
        const handleDelete = id => {
            const proceed = window.confirm('Are you sure ?')

            if (proceed) {
                const url = `https://calm-everglades-95109.herokuapp.com/products/${id}`
                fetch(url, {
                    method: "Delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = product.filter(p => p._id !== id)
                        setProduct(remaining)
                    })
            }
        }

        return (
            <div>
                <div className='products'>
                    <h1>
                        <Typed className='products-title'
                            strings={[
                                'Manage Inventory'
                            ]}
                            typeSpeed={40}
                            backSpeed={55}
                            loop
                        >
                        </Typed>
                    </h1>
                </div>

                <div className='MngProducts-container'>
                    {
                        product.map(p => <div>
                            <div className='MngProducts shadow-sm p-2 text-center rounded-3' data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">

                                <img src={p.picture} alt="" />
                                <h2>Name : {p.name}</h2>
                                <h5>Price : ${p.PPU}<span className='text-xs'>/Unit</span></h5>
                                <h5>Available Quantity : {p.Quantity}</h5>
                                <h5>MOQ:{p.MOQ} <span className='text-xs'>/Minimum order quantity</span></h5>
                                <Flip right cascade><p> {p.Description}</p></Flip>
                                <button className='btn btn-dark admit-btn' onClick={() => handleDelete(p._id)}>
                                    Delete Item
                                </button>

                            </div>

                        </div>)
                    }
                </div>
                <div>
                    <form className='lg:ml-80' onSubmit={handleSubmit(onSubmit)}>

                        <input
                            defaultValue={product.MOQ}
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
            </div>
        );
    };

    export default ManageProducts;