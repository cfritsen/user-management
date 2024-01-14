import React from 'react'


export default function User(props) {
    const {user: [index, data]} = props;



    const clickHandler = evt => {
        if (document.querySelector('.active') !== evt.currentTarget && document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active')
        }
        evt.currentTarget.classList.toggle('active')
    }

    return (
        <div className='user' onClick={clickHandler}>
            <h3>{data.name}</h3>
            <ul> Description:
                <li>ID: {data.id}</li>
                <li>Age: {data.age}</li>
                <li>Notes: {data.notes}</li>
            </ul>
        </div>
    )
}