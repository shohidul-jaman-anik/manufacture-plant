import React from 'react';
import { Flip } from 'react-reveal';
import Typed from 'react-typed';
import useProducts from '../../Shared/Hook/useProduct/useProducts';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product, setProduct] = useProducts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://infinite-citadel-42199.herokuapp.com/products/${id}`
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
        </div>
    );
};

export default ManageProducts;