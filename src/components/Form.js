import React, {useState} from 'react'


export default function Form(props){
    const {addUser} = props;

    const [form, setForm] = useState({
        name: '',
        age: '',
        notes: ''
    })



    return (
        <form>
            
        </form>
    )
}