import React from "react"
import cat from "./cat2.jpg";

export default function Home(props) {
    return (
        <React.Fragment>
            <h1>Welcome to Catrosphere</h1>
            <img src={require("./cat2.jpg")}/>
            <p>Look at Cat pictures and live</p>

        </React.Fragment>
    )
}