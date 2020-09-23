
// using hook method
import React, {useState} from "react"
// manipulate browser history
import {useHistory} from "react-router-dom"

export default function ContactUsPage(props) {

    // using hook that refers to the same state
    // setFormState function will be use to change the fullname and stuff
    let [formState, setFormState] = useState({
        "fullname": "",
        "email": "",
        "comments": ""
    });

    const updateFormField = (target) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value 
        });
    };

    const submitForm = () => {

    }

    return (
        <React.Fragment>
            <h1>Contact US</h1>
            <div>
                <label className="form-label">Full Name: </label>
                <input type="text" class="form-control" name="fullname"/>
            </div>
            <div>
                <label className="form-label">Email: </label>
                <input type="text" class="form-control" name="email"/>
            </div>
            <div>
                <label className="form-label">Comments: </label>
                <input type="textarea" class="form-control" name="comments"/>
            </div>
            <button className="btn btn-primary">Send Feedback</button>
        </React.Fragment>
    )
}