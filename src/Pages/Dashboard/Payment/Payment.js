import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3fcoEWKrisGJtYob8a6cDmb8cQDJiHQja8FYNhPE5Q6xzS9z2pQsXrSBkS7VHmeDkwxOwXHV3LSypVWBiypVRL00Dv21O1PU');

const Payment = () => {
    const { id } = useParams()
    



    const [order, setOrders] = useState([])
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            const url = `https://calm-everglades-95109.herokuapp.com/booking/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>please pay for {id}</h1>
            <div class="card w-50 max-w-md bg-base-100  my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.productName}</h2>
                    <p>Please pay: ${order.MOQ}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;