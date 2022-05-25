import React from 'react';
import { Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ service }) => {
    const navigate = useNavigate('')
    const { picture, name, Description, PPU, _id,Quantity,MOQ } = service

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
                <h2>Name : {name}</h2>
                <h5>Price : ${PPU}<span className='text-xs'>/Unit</span></h5>
                <h5>Available Quantity : {Quantity}</h5>
                <h5>MOQ:{MOQ} <span className='text-xs'>/Minimum order quantity</span></h5>
                <Flip right cascade><p> {Description}</p></Flip>
                <button onClick={() => nevigateServiceDetail(_id)} className='btn btn-dark admit-btn '>
                    Purchage
                </button>
            </div>
        </div>
    );
};

export default Product;