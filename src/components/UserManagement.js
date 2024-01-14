import React, {useState} from 'react'
import UserList from './UserList.js'
import data from './FakeUserDatabase.json'


export default function UserManagement(){
    const {Users} = data;
    const [users, setUsers] = useState(Users)

    return (
        <UserList users={users}/>
        // Insert form here
    )
}