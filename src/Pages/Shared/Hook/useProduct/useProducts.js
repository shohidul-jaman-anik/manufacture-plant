import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://infinite-citadel-42199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]
};

export default useProducts;