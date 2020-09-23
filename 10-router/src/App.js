import React from 'react';
import logo from './logo.svg';
import './App.css';
// react router stuff
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Home from "./pages1/Home";
import Photo from "./pages1/Photo";
import AboutUs from "./pages1/AboutUs";




function App() {
  return (
   <Router>
       <nav>
           <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/about">About Us</Link>
               </li>
               <li>
                   <Link to="/contact">Contact Us</Link>
               </li>
           </ul>
       </nav>
        {/* <nav>
           <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/about">About Us</Link>
               </li>
               <li>
                   <Link to="/photo">Photo</Link>
               </li>
           </ul>
       </nav> */}


    {/* where the page changes */}
       <Switch>
           <Route exact path="/">
               <HomePage/>
           </Route>
           <Route exact path="/about">
               <AboutUsPage/>
           </Route>
           <Route exact path="/contact">
               <ContactUsPage/>
           </Route>
       </Switch>
        {/* <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <AboutUs/>
            </Route>
            <Route exact path="/photo">
                <Photo/>
            </Route>
        </Switch> */}

   </Router>
  );
}

export default App;
