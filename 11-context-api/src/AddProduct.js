import React from 'react';
import ProductContext from "./ProductContext"


export default class AddProduct extends React.Component {
    // a state where they have the same properties in a class
    // this is for class base components if function base see ProductListing using const
    static contextType = ProductContext
    state = {
        'productName': '',
        'cost': ''
    }
    updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

// is inside App js so that can access controller and do function
  addProduct = () => {
    this.context.addProduct(this.state.product_name, this.state.cost);
  }

    render() {
        return (
            <React.Fragment>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="product_name"
            value={this.state.productName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={this.updateFormField}
          />
        </div>
        <button className="btn btn-primary" onClick={this.addProduct}>Create Product</button>
      </React.Fragment>

        )
    }
}