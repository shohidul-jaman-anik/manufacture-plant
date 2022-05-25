import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>Remove User ❌</td>
            <td><button onClick={makeAdmin} class="btn btn-sm">Make Admin 👨‍✈️</button></td>
        </tr>
    );
};

export default UserRow;