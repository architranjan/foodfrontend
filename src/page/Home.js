import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Search from '../component/Search'
import { useState , useEffect } from 'react'



export default function Home() {


  const[foodcat , setfoodcat] = useState([])
  const[fooditem , setfooditem] = useState([])

  const[search , setsearch] = useState('')

  
  
  const load = async ()=>{
    let response = await fetch("https://foodbackend-2hvh.onrender.com/api/display",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
     }
    });
  
    response = await response.json()
    // console.log(response);
    setfooditem(response[0]);
    setfoodcat(response[1]);
  }
  

  useEffect(()=>{
    load()
  } , [])
  



















  return (
<div>
    <div><Navbar/></div>

    <div>
    <Carousel/>
    </div>
    <div>
      <Search search={search} setsearch = {setsearch}/>
    </div>
      <div className='container'>
          {
            foodcat.length!==0 ? foodcat.map((data)=>{
              return (
                <div className='row mb-3'>
                <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                  <hr />
                  {fooditem.length!==0 ? fooditem.filter((item)=>(item.CategoryName===data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filteritem=>{
                    return(
                      <div key={filteritem.CategoryName} className='col-12 col-md-6 col-lg-3'>
                          <Card food={filteritem} option = {filteritem.options[0]}/>
                        </div>
                    )
                  }): <div></div>}
                </div>
              )
            }) : ""
          }
        
      </div>

    <div><Footer /></div>
</div>
   
  )
}


