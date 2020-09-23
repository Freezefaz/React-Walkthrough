import React from "react"

export default function AboutUs(props) {
    return (
        <React.Fragment>
            <h1>About Us</h1>
            <p>Strictly only cat photos!</p>
            <ol>
                <p><strong>Rules</strong></p>
                <li>No Dog photo</li>
                <li>No Rabbit photo</li>
                <li>No Fish photo</li>
            </ol>
        </React.Fragment>
    )
}