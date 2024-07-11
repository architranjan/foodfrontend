import React from "react";
import { Link  , useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Signup() {
     const [user , setuser] = useState({name:"" , password:"",email:"",location:""})

           const nav = useNavigate();

      const handleSubmit = async (e)=>{

        e.preventDefault();

        console.log(user);

           
        
         const response = await fetch("https://foodbackend-i2fd.onrender.com/api/createuser",{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            name:user.name,
            email:user.email,
            password:user.password,
            location:user.location
         })
         });

         const json = await response.json();
         console.log(json);

         if(!json.success){
            alert("Email Already in Use or Password size should be greater than 5")
         }

         
         else{
          nav('/login')
         }  

       

    }
    const onchange = (event)=>{
        setuser({...user , [event.target.name]:event.target.value})
    }
  return (
      <>
      <div className="container">
        <form onSubmit={handleSubmit} >
        <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" placeholder="Enter your name" name='name' value={user.name} onChange={onchange} />
    
  </div>   

  <div className="form-group">
    <label htmlFor="adress">Address</label>
    <input type="text" className="form-control"  placeholder="Enter your Location" name='location' onChange={onchange} value={user.location} />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} name='email' onChange={onchange} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={onchange} value={user.password} />
  </div>
 
  <button type="submit" className="btn btn-success">Submit</button>

  <Link to='/login' className="m-3 btn btn-danger">Already a user</Link>


</form>
      </div>

      </>
  )
}
