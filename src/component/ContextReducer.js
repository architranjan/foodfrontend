import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state , action)=>{
   switch(action.type){
    case "ADD":
          return [...state ,{id:action.id , name:action.name , qty:action.qty , size:action.size , price:action.price , img:action.img} ];
    
    case "REMOVE":
         let newarr = [...state]   
         newarr.splice(action.index , 1)
         return newarr
    
    case "UPDATE":
         let newarr2 = [...state]
         newarr2.find((food , index)=>{
            if(food.id === action.id){
                newarr2[index] = {...food ,qty:parseInt(action.qty) + parseInt(food.qty) , price:action.price + food.price}
            }
         })

         return newarr2

    case "DROP":   
         return []  
              
   }
}


export const CartProvider = ({children})=>{
    const [state , dispatch] = useReducer(reducer , []);
    return (
       <CartDispatchContext.Provider value={dispatch}>

           <CartStateContext.Provider value={state}>
            {children}
           </CartStateContext.Provider>

       </CartDispatchContext.Provider>
    )
}
export const useCart = ()=>useContext(CartStateContext);
export const useDispatch = ()=>useContext(CartDispatchContext);