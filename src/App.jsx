import { useReducer } from 'react';
import './App.css'
import User from './component/User/User';


function App() {
  const initialcount= {num: 0}
  const reducer= (state, action)=>{
    // console.log(state, action);
    switch(action.type){
      case "PLUS":{
        return {num:state.num+1};
      }
      case "MINUS":{
        if(state.num>0){
          return {num:state.num-1};
        }
      }
    default:
      return state;
    
    }
  }
  const [count, dispatch]= useReducer(reducer, initialcount);

  return (
    <>
      <h1>Count: {count.num}</h1>
      <button onClick={()=> dispatch({type:"PLUS"})}>PLUS</button>
      <button onClick={()=> dispatch({type:"MINUS"})}>MINUS</button>
      <User></User>
    </>
  )
}

export default App
