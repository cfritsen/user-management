import React from 'react'
import User from './User'


export default function UserList(props) {
    const {users} = props;

    return (
        <div className='user-list'>
            {Object.entries(users).map(user => (<User key={user[1].id} user={user} />))}
        </div>
    )
}