import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing";

// function App() {
// This is the data to share with all components
class App extends React.Component {

    state = {
        products: [
            {
                id: 1,
                productName: "Ace Anvil",
                cost: 29.90
            },
            {
                id: 2,
                productName: "Ace Hammer",
                cost: 20.90
            },
            {
                id: 3,
                productName: "Ace Screwdriver",
                cost: 9.90
            },
        ]
    }

    render() {
        // links object to certain components
        // allows data to be shared as a proxy/middleman
        const controller = {
            products: () => {
                return this.state.products;
            },
            addProduct: (product_name, cost) => {
                // if we are using a real database
                // 1. use axios to tell Flask/Django to create the new product
                // 2. Flask/Django should return the new product with its id
                // 3. Create a JavaScript object based on the return
                // 4. Add to state  

                let id = Math.random() * 10000 + 9999;
                // let newProduct = {
                //     'id': id,
                //     'product_name': product_name,
                //     'cost': cost
                // }
                
                // shortcut to the above
                let newProduct = { id, product_name, cost };
                this.setState({
                    'products': [...this.state.products, newProduct]
                })
            }
        }
        return (
            <React.Fragment>
                {/* context becomes the controller */}
                {/* this is where the sharing happens */}
                <ProductContext.Provider value={controller}>
                    {/* anything in here is shared to all components */}
                    <ProductListing />
                </ProductContext.Provider>
            </React.Fragment>


        );
    }
}


export default App;
