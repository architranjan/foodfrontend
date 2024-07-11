import React from 'react'
import trash from "./trash.png"
import { useCart , useDispatch } from '../component/ContextReducer'

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatch();

    if(data.length===0){
       
        return (
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
        )
    }


    const hadleCheckout = async()=>{
        let userEmail = localStorage.getItem('userEmail')

        let response = await fetch("https://foodbackend-i2fd.onrender.com/api/orderdata",{
            method:'POST',

            headers:{
                'Content-Type':'application/json'
             },

             body:JSON.stringify({
                order_data:data,
                email:userEmail,
                order_date:new Date().toDateString()

             })

        })

        if(response.status===200){
            dispatch({type:"DROP"})
        }
    }

    let totalprice = data.reduce((total , food)=>total + food.price , 0)
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Option</th>
                    <th scope='col'>Amount</th>
                    </tr>
                  
                </thead>
                <tbody>
                    {data.map((food , index)=>(
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td><button type="button" className='btn p-0'><img src={trash} alt="delete" onClick={()=>{dispatch({type:"REMOVE" , index:index})}} style={{height:'20px' , marginBottom:"5px"}}></img></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price : {totalprice}/-</h1></div>
            <div><button className='btn bg-success mt-5' onClick={hadleCheckout}>Check Out</button></div>
        </div>
    </div>
  )
}
