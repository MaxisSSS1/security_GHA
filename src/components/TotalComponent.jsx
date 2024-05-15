import React from 'react'
import "../styles.css"

export default function TotalComponent({totalCount}) {
  
  return (
  <div className='total'> 
    <span>Total: {totalCount}</span>
  </div>
  )
}
