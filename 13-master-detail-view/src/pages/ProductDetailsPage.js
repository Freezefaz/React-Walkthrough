import React from "react";
import ProductContext from "../ProductContext";

export default class ProductDetailsPage extends React.Component {
    // static can track instances being created in this case to note which id
       static contextType = ProductContext;
       state = {
           productID: 0
       };
       componentDidMount() {
        //    inside props there is a object params that has a dictionary called params
        // props store history, location and match of objects
           let productID = this.props.match.params.productID;
           this.setState({
            //    product id from the state is stored as string so need to convert
               "productID": parseInt(productID)
           });
       }

       render() {
           let product = this.context.findProductByID(this.state.productID);
           return (
               <React.Fragment>
                   {/* if the product is not found then return nothing */}
                   {product ? (
                       <React.Fragment>
                        <h1>{product.product_name}</h1>
                        <ul>
                   <li>Cost: {product.cost}</li>
                        </ul>

                        </React.Fragment>
                   ): null}
               </React.Fragment>

           );
       }
}