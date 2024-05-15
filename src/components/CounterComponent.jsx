import React from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CounterComponent({count, setCount}) {


    return (
        <div className='list-item-counter'> 
            <button onClick={(event)=>setCount(count-1)} className='counter-btn counter-btn-left'><FontAwesomeIcon icon={faAngleLeft} /></button>
            <span>{count}</span>
            <button onClick={(event)=>setCount(count+1)}  className='counter-btn counter-btn-right'><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    )
}
