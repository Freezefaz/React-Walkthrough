import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import {Link} from "react-router-dom";

export default function ProductListing() {
    // call the controller to make it available
    // need to specify which context to use
    const controller = useContext(ProductContext);
    console.log(controller)

    return (
        <React.Fragment>
            <h1>Products</h1>
            <ul>
                {controller.products().map((p) => {
                    // this is like href to hyperlink
                    return <li><Link to={"productDetails/" + p.id}>{p.product_name}</Link></li>
                    // <li>{p.productName}</li>;
                })}

                { /*
            short form arrow function
            controller.products().map( p => (<li>p.name</li>) )

        */}
            </ul>
            {/* inside productlisitng so that addproducts can access product context */}
        </React.Fragment>
    )
}