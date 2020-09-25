import React from "react";
import AddProduct from "../AddProduct";
// this is a hook
import {useHistory} from "react-router-dom";

export default function AddProductPage() {
    // use to navigate to the object history to other routes
    const history = useHistory();

    // make fucntion to navigate where to go
    let gotoBackHome = () => {
        history.push("/");
    }

    return (
        <React.Fragment>
            <h1>Add New Product</h1>
            {/* after product added return to home page */}
            <AddProduct onAddProduct={gotoBackHome}/>
        </React.Fragment>
    );
}