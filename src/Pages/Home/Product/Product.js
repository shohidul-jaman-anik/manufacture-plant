import React from 'react';
import { Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ service }) => {
    const navigate = useNavigate('')
    const { picture, name, description, PPU, _id, Quantity, supplier } = service

    const nevigateServiceDetail = id => {
        console.log(id)
        navigate(`/purchage/${id}`)
    }
    return (
        <div>
            <div className='product-container shadow-sm p-2 text-center rounded-3 container' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h5>PPU <span className='text-xs'>(Price Per Unit)</span> : ${PPU}</h5>
                <h5>Quantity : {Quantity}</h5>

                <p>Supplier : {supplier}</p>
                <Flip right cascade><p>{description}</p></Flip>
                <button onClick={() => nevigateServiceDetail(_id)} className='btn btn-dark admit-btn '>
                    Updata Stock
                </button>
            </div>
        </div>
    );
};

export default Product;