import React, { useEffect, useRef, useState } from "react";
import { useDispatch , useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatch();
  let option = props.option;
  let price = Object.keys(option);
  const priceref = useRef();

 let state = useCart();
   
  const[qty , setqty] = useState(1);
  const[size , setsize] = useState("");

  let finalPrice = qty*parseInt(option[size]);

  let fooditem = props.food
  const handleclick = async ()=>{
    let foodarr= [];
    for(const item of state){
      if(item.id===fooditem._id){
        foodarr = item;
        break;
      }
    }
    if(foodarr.length!==0){
      if(foodarr.size === size){
        await dispatch({type:"UPDATE" , id:fooditem._id , price:finalPrice , qty:qty});
        return 
      }
    }
         await dispatch({type:"ADD" , id:fooditem._id , name:fooditem.name , price:finalPrice , qty:qty , size:size , img:fooditem.img})
        
  }

  useEffect(()=>{
    setsize(priceref.current.value)
  })

  

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "400px" }}>
        <img className="card-img-top" src={fooditem.img} alt="Card image cap" style={{height:"140px" , objectFit:"fill"}}></img>
        <div className="card-body">
          <h5 className="card-title ">{fooditem.name}</h5>
        
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setqty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-success rounded" ref={priceref} onChange={(e)=>setsize(e.target.value)}>
            {
              price.map((data)=>{
                return(
                  <option key={data} value={data}>{data}</option>
                )
              })
            }
            </select>
            <br/>
            <div className="d-inline fs-5">₹{finalPrice}/-</div>
            <hr/>
           {localStorage.getItem("authToken") ? <button className="btn btn-success justify-center ms-2" onClick={handleclick}>Add to Cart</button>:null }
          </div>
        </div>
      </div>
    </div>
  );
}
