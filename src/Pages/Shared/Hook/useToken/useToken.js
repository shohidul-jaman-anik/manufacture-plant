// import React, { useEffect, useState } from 'react';

import { useState } from "react";
import { useEffect } from "react";

// const useToken = user => {

//     console.log(user)
//     const [token, setToken] = useState('')
//     useEffect(() => {
//         const email = user?.user?.email
//         const currentUser = { email: email }
//         if (email) {
//             fetch(`https://infinite-citadel-42199.herokuapp.com/user/${email}`, {
//                 method: "PUT",
//                 headers: {
//                     "content-type": "application/json"
//                 },
//                 body: JSON.stringify(currentUser)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log('data inside token', data)
//                     const accessToken = data.token
//                     localStorage.setItem('accessToken', accessToken)
//                     setToken(accessToken)
//                 })
//         }

//     }, [user])
//     return [token]
// };

// export default useToken;



const useToken = user => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const userEmail = (user?.user?.email)
        const email = { email: userEmail }

        if (userEmail) {
            fetch(`https://infinite-citadel-42199.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(email)

            })
                .then(res => {
                    console.log(res)
                    res.json()
                })
                .then(data => {
                    setToken(data)
                    console.log("dataaaaaaaaa", data)
                })
        }

    }, [user])

    return [token]
};

export default useToken;