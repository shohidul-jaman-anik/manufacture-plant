import React from 'react';
import { useForm } from 'react-hook-form';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import usePurchage from '../Shared/Hook/usePurchage/usePurchage';
import './Purchage.css'

const Purchage = () => {
    const { productsId } = useParams()
    const { register, reset, handleSubmit } = useForm();

    const [product, setProduct] = usePurchage(productsId)

    const handleDelivered = () => {

    }
    const onSubmit = (data) => {

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
                    <h2>{product.name}</h2>
                    <h4>Price: {product.PPU}</h4>
                    <h4>Quantity : {product.Quantity}</h4>

                    <p>Supplier : {product.supplier}</p>
                    <p>{product.description}</p>

                    <div className='d-flex  mt-3 '>
                        <button onClick={() => handleDelivered()} className='update-btn ms-2'>Delivered</button>
                        <form className='d-flex w-50 ms-auto ' onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-3 mr-2' placeholder='Enter Price' type="number" {...register("Quantity")} />
                            <input className='update-btn' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchage;