import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user , setuser] = useState({password:"",email:""})

    let nav = useNavigate();

    const handleSubmit = async (e)=>{

      e.preventDefault();

      console.log(user);

         
      
       const response = await fetch("https://foodbackend-2hvh.onrender.com/api/login",{
       method:'POST',
       headers:{
          'Content-Type':'application/json'
       },
       body:JSON.stringify({
         
          email:user.email,
          password:user.password,
         
       })
       });

       const json = await response.json();
       console.log(json);

       if(!json.success){
          alert("Enter Valid Credentials")
       }

       if(json.success){
        localStorage.setItem("userEmail" ,user.email );
        localStorage.setItem("authToken" , json.authToken);
        console.log(localStorage.getItem("authToken"));
        nav('/');
     }

     

  }
  const onchange = (event)=>{
      setuser({...user , [event.target.name]:event.target.value})
  }   
  return (
    <div>
          <div className="container">
        <form onSubmit={handleSubmit} >




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

  <Link to='/createuser' className="m-3 btn btn-danger">I am a new user</Link>


</form>
      </div>
    </div>
  )
}
