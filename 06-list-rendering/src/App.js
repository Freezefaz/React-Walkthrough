import React from 'react';
import logo from './logo.svg';
import './App.css';
import SurveyForm from './SurveyForm'
import RestaurantForm from './RestaurantForm'

function App() {
  return (
 <React.Fragment>
     <h1>Welcome!</h1>
        {/* <SurveyForm/> */}
        <RestaurantForm/>
    </React.Fragment>
  );
}

export default App;
