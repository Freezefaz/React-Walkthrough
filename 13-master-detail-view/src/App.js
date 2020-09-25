import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import addProductPage from "./pages/AddProductPage";

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
                });
            },
            // to find the product and parse the id for the details
            findProductByID: productID => {
                let product = this.state.products.find(p => p.id === productID);
                console.log(product);
                return product;
            }
        };
        return (
            <React.Fragment>
                {/* context becomes the controller */}
                {/* this is where the sharing happens */}
                <ProductContext.Provider value={controller}>
                    {/* anything in here is shared to all components */}
                    <Router>
                        {/* adding navbar */}
                        <nav className="navbar navbar-expand-sm bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/addProduct" className="nav-link">Add New</Link>
                                </li>
                            </ul>
                        </nav>
                         <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <ProductListingPage />
                            </Route>
                            {/* props is from router that stores the id  */}
                            {/* props from router go to switch then go route then render to page and get the id */}
                            <Route path="/productDetails/:productID"
                            render={props => {return <ProductDetailsPage {...props}/>;}}>
                                <ProductListingPage />
                            </Route>
                            <Route exact path="/addProduct">
                                <addProductPage/>
                            </Route>
                        </Switch>
                        </div>
                    </Router>
                    <ProductListing />
                </ProductContext.Provider>
            </React.Fragment>


        );
    }
}


export default App;
