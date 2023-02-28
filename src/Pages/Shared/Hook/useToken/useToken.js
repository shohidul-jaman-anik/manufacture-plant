// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

// const useToken = user => {

//     console.log(user)
//     const [token, setToken] = useState('')
//     useEffect(() => {
//         const email = user?.user?.email
//         const currentUser = { email: email }
//         if (email) {
//             fetch(`https://manufacture-plant-server.vercel.app/user/${email}`, {
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

            fetch(`https://manufacture-plant-server.vercel.app/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(email)

            })
                .then(res => res.json())
                .then(data => {

                    console.log("dataaaaaaaaa", data)

                    const accessToken = data.token
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken)

                })
        }

    }, [user])

    return [token]
};

export default useToken;