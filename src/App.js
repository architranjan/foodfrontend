import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Home from "./page/Home";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Signup from "./page/Signup";
import Login from "./page/Login";
import { CartProvider } from "./component/ContextReducer";
import Myorder from "./page/Myorder";


function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <div>
         <Routes>
          <Route exact path="/" element ={<Home/>}></Route>
          <Route exact path="/login" element ={<Login/>}></Route>
          <Route exact path="/createuser" element ={<Signup/>}></Route>
          <Route exact path="/myorder" element ={<Myorder/>}></Route>
        
         </Routes>

      </div>
   
    </BrowserRouter>
    </CartProvider>
   
  );
}

export default App;
