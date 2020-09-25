import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import AddProduct from "./AddProduct";

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
                    return 
                    <li>{p.productName}</li>;
                })}

                { /*
            short form arrow function
            controller.products().map( p => (<li>p.name</li>) )

        */}
            </ul>
            {/* inside productlisitng so that addproducts can access product context */}
            <AddProduct/>
        </React.Fragment>
    )
}