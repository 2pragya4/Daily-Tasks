import './App.css';
import Head1 from './Components/header';
import Proj1 from './Components/proj1';

//import Home from './Components/Home';

// now we need to import the component
//import Head1 from  './Components/header';

// another method to import is-
//import {Head1, Head2} from './Components/header';


//creating another component- first letter should be in caps
// using props receiving object and we need to access the properties

/*function MyComponent(props) {
  return (
    // it will receive object so props.name would be its property
    <div className = {props.namefor}> 
      {props.name} 
    </div>
  );
}*/


// without using props - destructing
// by setting the income variable nad default as 10

// single tag(without closing tag) - declared as <hr />
// and if we want to have more than 1 tag, should be enclosed with <> </> - empty tag
/*function MyComponent({namefor, name, income = 10}){
  return(
    <>  
    <div className={namefor}> 
        {name}: ${income}
    </div>

    <hr />  
    </>
  );
}

function App() {
  return (
    <div>
       Hello <MyComponent name={"Pragya"} namefor="div1" income={300}/> <MyComponent namefor="div2"/> <MyComponent name={"Agrawal"} namefor="div3"/> Guys 
    </div>
  );
}*/

// we can write JS code anywhere except for inside the 'return' part, as it is for JSX
/*const a = 23;*/

function App(){
  //const b = 34;

  return(
    // can't write JS code here
    // using header component here
    //components are always self enclosing tags
    // put these inside div
    /*{a}
    {b} 
    <Home />
    <Head1 />
    Hello world*/

    <div>
      <Head1 />
      <Proj1 />
    </div>
  );
}

export default App;
