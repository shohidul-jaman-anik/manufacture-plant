import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Sucessfully made an admin')
            })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>Remove User ❌</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin 👨‍✈️</button>}</td>
        </tr>
    );
};

export default UserRow;