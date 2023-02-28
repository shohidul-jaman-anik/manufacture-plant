import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [products, setProducts] = useState([])
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const url = `https://manufacture-plant-server.vercel.app/orders?email=${user.email}`
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://manufacture-plant-server.vercel.app/orders/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(p => p._id !== id)
                    setProducts(remaining)
                })
        }
    }

    return (
        <div>
            <h3>Total Orders : {products.length}</h3>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Delete Order</th>
                            <th>Paid Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{product?.productName}</td>
                            <td>{product.MOQ}</td>
                            <td>{product.address}</td>
                            <td>{product.number}</td>
                            <td onClick={() => handleDelete(product._id)}> ❌ </td>
                            <td>
                                {(product.PPU && !product.paid)}&&
                                <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-sm'>💳</button></Link>

                                {(product.PPU && product.paid)}&&<span className='text-success'>Paid</span>

                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;