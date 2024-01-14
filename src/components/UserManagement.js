import React, {useState} from 'react'
import UserList from './UserList.js'
import Form from './Form.js'
import data from './FakeUserDatabase.json'

//Main component--------------
export default function UserManagement(){
    const {Users} = data;
    const [users, setUsers] = useState(Users)

    const addUser = user => {
        setUsers([...users, {id: findNext(users), ...user}])
    }


    return (
        <div className='module'>
            <UserList users={users}/>
            <Form addUser={addUser} />
        </div>
    )
}
//End main component------------

//Finds next available ID
const findNext = users => {
    let valueIsFree = false;
    let checkedValue;
    for (checkedValue = 1; !valueIsFree; checkedValue++) {
        let isFree = true;
        for (let user of users) {
            if (user.id === checkedValue) {
                isFree = false;
                break;
            }
        }
        if (isFree){
            valueIsFree = true;
        }
    }
    return checkedValue - 1;
}