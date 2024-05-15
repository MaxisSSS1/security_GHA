import React from 'react'
import CounterComponent from './CounterComponent'
import CustomCheckbox from '../UI/CustomCheckbox'
import "../styles.css"

export default function ListItemComponent({ listItem, updateItem, removeItem }) {

    const setCount = (count) => {

        if (count == 0){
            removeItem(listItem.id);
            return;
        }
        updateItem({...listItem, count: count});
    }

    
    return (
        <li  className='list-item'>
            <CustomCheckbox onChange={event=>{removeItem(listItem.id)}}>{listItem.name}</CustomCheckbox>
            <CounterComponent count={listItem.count} setCount={setCount} />
        </li>
    )
}
