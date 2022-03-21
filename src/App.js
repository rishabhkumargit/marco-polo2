import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App(){
  const [state,setState] = useState(false);
   const toggle=()=>{
     setState(!state)
   }
   return(
     <div className='App'>
       <h1 id="marco-polo">{state ? 'Marco' : 'Polo'}</h1>
       <button id="marco-polo-toggler" onClick={toggle}>{state ? 'Polo' : 'Marco'}</button>
     </div>
   )
}

export default App;