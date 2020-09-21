import React from 'react';
import logo from './logo.svg';
import './App.css';

import Alert from "./Alert";
import ImageFrame from "./ImageFrame"
import cat from "./cat2.jpg";
import FormCreate from "./FormCreate"

// multiple fragments broken into various function
// complied in the App()

// function sayHello(){
//     return "Hi There";
// }

// Passing arguements into components
// props is short for properties
function SayHello(props){
    return (
        <p>Hi {props.name}</p>
    );
}

function createParagraph(){
    return (
        <React.Fragment>
            <h2>This is a header</h2>
            <p>This is a paragraph</p> 
        </React.Fragment>
        
    );
}

function CatPic(props){
    return (
        <img src={require("./cat2.jpg")}/>
    );
    
}
// Component
// Must be a fucntion
// Must be uppercase
// return JSX

function App() {
    let name = "Fareez"
    let message = "Long long ago"
  return (
   <React.Fragment>
       <Alert message="Dangerous" bgcolor="red"/>
       {/* must have value in {} */}
       <h1>Hello {name}</h1>
       <SayHello name="Pikachu"/>
       {createParagraph()}
       <CatPic/>
       {/* {formCreate()} */}
       <FormCreate/>
       <Alert message={message} bgcolor="teal"/>
       <ImageFrame image={cat}/>
   </React.Fragment>
  );
}

export default App;
