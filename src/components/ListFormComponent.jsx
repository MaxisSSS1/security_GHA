import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ListFormComponent({createItem}) {

    const [item, setItem] = useState({
        name:"",
        count:1
    });
    const submitForm = (event)=>{
        event.preventDefault();
        if(!item.name) return;
        
        createItem(item);
        setItem({
            ...item,
            name:''
        })
    }
    return (
        <form onSubmit={submitForm} className='list-form'> 
            <input 
                value={item.name} 
                onChange={(event)=>{setItem({...item, name: event.target.value})}} 
                className='list-form-item-name' 
                type="text" 
                placeholder="Add an item..." />
            <button className='list-form-add-btn'><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}
