// like python import to get 'react package
import React from "react"
// to use image need ./ to indicate src and not node modules folder
import cat from "./cat.jpg";
import "./style.css"

// class is a reserved name in JS so need to use className

// Name of fucntion must match the file and A must be uppercase
function App() {
    // JSX in which node translate to JS
    return (
        // react fragment is like a div as there can only be one parent if not error
        // the fragment is invisible in the inspector

        // Example 1
        // <React.Fragment>
        //     {/* first {} to indcate javascript 2nd {} is javascript object for key value pair */}
        //     <h1 style={{backgroundColor: "yellow", fontStyle: "Verdana"}}>Hello World</h1>
        //     <p>Today is Monday</p>
        //     <img src={cat}/>
        //     {/* require is a react command to get image */}
        //     <img src={require("./cat2.jpg")}/>
        // </React.Fragment>

        // Practice
        <React.Fragment>
            <div className="title">
                <img id="logo" src={require("./bvb.jpeg")}/>
                <h1>Champions Elect!</h1>
            </div>

            <div className="squad">
                <h2>First Team</h2>
                <ol>
                    <li>GK: Romain Burki</li>
                    <li>DF: Emre Can, Mat Hummels, Axel Zagadou</li>
                    <li>MF: Lukasz Pizkerck, Axel Witsel, Julian Brandt, Raphael Gureiro</li>
                    <li>AT: Marco Reus, Erling Haaland, Jadon Sancho</li>
                </ol>
                <h4>Manager: Lucien Favre</h4>
            </div>
            <h2>Subscribe to team updates!</h2>
            <form>
                <label>Email:</label>
                <input type="text"/>
                <label>What position will we finish?</label>
                <input type="radio" value="Champions"></input>
            </form>
            <footer>
                <div>
                    Linkedin
                </div>
            </footer>


            

        </React.Fragment>
        
    )

}

// To show on html
export default App;