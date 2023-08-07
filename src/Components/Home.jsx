// now it is a jsx file both JS and html can be used
import React from 'react'
import {useState} from 'react' 

// and creating the function changehandler to access the value in onChange function 
const Home = () => {
  // creating a var, inputValue to access the value of the function 
/*let inputValue=0;*/

// declaring variable using 'useState' and setInputValue
  const [inputvar, setInputValue] = useState(0);

  /*const changeHandler =(e)=>{
    inputValue = e.target.value;
    console.log(inputValue);
  }*/
  
  // now we create 2 functions increment and decrement for the buttons
  const increment= ()=>{
    //inputvar++;
    setInputValue(inputvar+1);
  }
  
  const decrement= ()=>{
    //inputvar--;
    setInputValue(inputvar-1);
  }
  
  // adding styles to the button 
  const btnStyle={
    padding: 20,
    border: "none",
    margin: 20,
    backgroundColor: "light grey",
  }
  return (
    <div>
      <input 
        style={{padding:"20px", border: "1px solid black"}}
        type="number" 
        placeholder="Enter your name/ number"

        /*onChange= {(e)=>{
          inputValue = e.target.value;
          console.log(inputValue);
        }}*/

        /*onChange = {changeHandler}*/
        // instead of onChange just setting the value 
        // with this value attribute, the value of var remains constant
        // and we cannot type in inputbox
        value = {inputvar}
        
        // with this we can read only and can't write
        readOnly 
      />
      
      <button style={btnStyle} onClick={decrement} > - </button>
      <button style={btnStyle} onClick={increment} > + </button>

    </div>
  )
}

export default Home