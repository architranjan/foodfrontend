

import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Navbar.css';

import Badge from 'react-bootstrap/Badge'
import Modal from '../page/Modal';
import Cart from '../page/Cart';
import { useCart , useDispatch } from './ContextReducer'

const Navbar = () => {
  const state = useCart();
  let dispatch = useDispatch();
   const nav = useNavigate();
   const handlelogout = ()=>{
         localStorage.removeItem('authToken');
         dispatch({type:"DROP"})
         nav('/login')
   }

   const handle = ()=>{
    console.log(state);
   }

   const[view , setview] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className='fs-2 fw-bold fst-italic' onClick={handle} >Food Express </div>
      </div>
      <ul className="navbar-links me-auto mb-0">
        <li>
          <Link to="/">Home</Link>
        </li>
       

        {(localStorage.getItem("authToken"))?
         <li>
         <Link to="/myorder">My Order</Link>
         </li> : ""
        }
      
      </ul>

      {(!localStorage.getItem("authToken"))?

      <div className='d-flex'>
      
          <Link className='btn bg-white mx-1 text-success' to="/login">Login</Link>
          <Link className='btn bg-white mx-1 text-success' to="/createuser">Signup</Link>
      
      </div>
           :
           <div>
                  <div className='btn bg-white text-success mx-2' onClick={()=>setview(true)}> My Cart {"  "}
                    <Badge pill bg="danger"> {state.length}</Badge>
                  </div>
                  {view?<Modal onClose={()=>setview(false)}><Cart/></Modal>:null}
                  <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>LogOut</div>
           </div>
          
           }
    </nav>
  );
};

export default Navbar;

