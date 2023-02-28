import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState()


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('');
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }

        </>
    );
};

export default CheckoutForm;


// import { async } from '@firebase/util';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({ order }) => {

//     const stripe = useStripe();
//     const elements = useElements();
//     const [cardError, setCardError] = useState()
//     const [success, setSuccess] = useState()
//     const [clientSecret, setClientSecret] = useState('');

//     const {PPU,name,MOQ } = order

//     useEffect(() => {
//         fetch('https://manufacture-plant-server.vercel.app/create-payment-intent', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({ PPU })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data?.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                 }
//             });

//     }, [PPU])


//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         if (!stripe || !elements) {
//             return;
//         }

//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return;
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         });

//         if (error) {
//             setCardError(error.message)
//         }
//         setSuccess('')

//         // confirm card payment
//         const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: name,
//                         MOQ: MOQ
//                     },
//                 },
//             },
//         );

//         if (intentError) {
//             setCardError(intentError?.message);
//             // setProcessing(false);
//         }
//         else {
//             setCardError('');
//             setSuccess('congress your payment is sucessfully done')
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe }>
//                     Pay
//                 </button>
//             </form>
//             {
//                 cardError && <p className='text-red-500'>{cardError}</p>
//             }
//  {
//                 success && <div className='text-green-500'>
//                     <p>{success}  </p>
//                     {/* <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p> */}
//                     {/* || !clientSecret */}
//                 </div>
//             }
//         </>
//     );
// };

// export default CheckoutForm;