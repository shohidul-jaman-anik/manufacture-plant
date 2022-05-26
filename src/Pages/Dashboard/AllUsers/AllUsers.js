import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery, QueryClient, QueryClientProvider, } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    // const { data: users ,isLoading} = useQuery( 'users',() => fetch('http://localhost:5000/user')
    // .then(res => res.json()))
    // if(isLoading){
    //     return <Loading></Loading>
    // }

    const [users, setUsers] = useState([])
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/user')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>all user {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Delete User</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;