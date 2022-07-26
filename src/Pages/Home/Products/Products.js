import React from 'react';
import useProducts from '../../Shared/Hook/useProduct/useProducts';
import Product from '../Product/Product';
import Typed from 'react-typed';
import './Products.css'


const Products = () => {
    const [product, setProduct] = useProducts()
    return (
        <div>
            <div >
                <div className='services'>
                    <h1>
                        <Typed className='services-title'
                            strings={[
                                'Our Inventory'
                            ]}
                            typeSpeed={40}
                            backSpeed={55}
                            loop
                        >
                        </Typed>

                    </h1>
                </div>

                <div className='products-container'>
                    {
                        product.slice(0,6).map(service => <Product
                            key={service._id}
                            service={service}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;