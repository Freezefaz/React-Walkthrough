import React from "react"
import cat from "./cat2.jpg";

// need to import image first but in the App() page before can retrieve pic
export default function ImageFrame(props) {
    return (
        <React.Fragment>
        <img src={props.image} style={{
            border: "1px solid red"
        }}/>
        </React.Fragment>
    );
}