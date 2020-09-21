import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    // <Counter/>
    // must have curly braces
    <Counter initialValue={5}/>
  );
}

export default App;
