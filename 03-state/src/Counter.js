import React from "react";

// this is like a OOP in python
// Use this to be a state variable



export default class Counter extends React.Component {

//  Declare a state must use the word
state = {
    // count: 10
    count: this.props.initialValue
}
// replace variables in the state directly
increment = () => {
    this.setState({
        count: this.state.count + 1
    })
}
// setState is asynchronous
reduction = () => {
    if (this.state.count > 0)
    this.setState({
        count: this.state.count - 1
    })
}

    // no need put function at the start
    render(){
        return <React.Fragment>
        <div style={{
            border: "1px solid black",
            padding: "10px",
            // turnary operator or conditional rendering
            // if condition is true becomes green else red
            color: this.state.count % 2 == 0 ? "green" : "red",
            width: "50px"
        }}
        // onClick={this.increment}
        >
            {/* this is like self in python */}
            {this.state.count}
        </div>
        {/* onclick must be in the tag */}
        {/* true and false is boolean and not string! */}
        <button onClick={this.increment} disabled={this.state.count == 20 ? true : false}>Increase</button>
        <button onClick={this.reduction} disabled={this.state.count == 0 ? true : false}>Reduce</button>
        <p>Current Count = {this.state.count}</p>
        {this.state.count % 2 == 0 ? <p>Number is even</p> :null }
        </React.Fragment>
    }
}