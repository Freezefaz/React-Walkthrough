import React from "react"
import cat from "./cat.jpg";

export default function Photo(props) {
    return (
        <React.Fragment>
            <h1>Photo Gallery</h1>
            <div>
                <img src={require("./cat.jpg")}/>
            </div>
        </React.Fragment>
    )
}