import React from 'react'
import './Search.css'
import { useState } from 'react'

export default function Search(props) {
  
   

  return (
    <div className='form-conatiner'>
     <div className='class-form justify-content-center'>
      <input
        className='search-input'
        type="text"
      
        placeholder="Search..."
        value = {props.search} onChange={(e)=>{
          props.setsearch(e.target.value)
        }}/>
      {/* <button className='sbtn' type="submit">Search</button> */}
    </div>
   
    </div>
    
  )
}
