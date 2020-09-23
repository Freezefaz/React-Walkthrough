import React from "react";

export default class BudgetTracker extends React.Component {
    
    state = {
        expense: [
            {
                id: 1,
                date: "2020-09-22",
                description: "Cab back home",
                category: "Transport",
                amount: "20",
                reconciled: true
            },
            {
                id: 2,
                date: "2020-09-23",
                description: "Lunch",
                category: "meal",
                amount: "5",
                reconciled: false
            },
            {
                id: 3,
                date: "2020-09-24",
                description: "Renovation",
                category: "Loan",
                amount: "1000",
                reconciled: false
            },

        ],
        all_category: [
            {
                'value': 'transport',
                'display': 'Transport'
            },
            {
                'value': 'meal',
                'display': 'Meal'
            },
            {
                'value': 'bills',
                'display': 'Bills'
            },
            {
                'value': 'loans',
                'display': 'Loans'
            },
        ],
      newExDate:"",
      newExDes: "",
      newExCat: [],
      newExAmt: "",

    }
    
    updateForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    addExpense = () => {
        // create new task object
        let id = Math.floor(Math.random() * 99999 + 10000);
        let newEx = {
            "id": id,
            "date": this.state.newExDate,
            "description": this.state.newExDes,
            "category": this.state.newExCat,
            "amount": this.state.newExAmt,
            "reconciled": false
        };
        this.setState({
            "expense": [...this.state.expense, newEx],
            "newExDate":"",
            "newExDes": "",
            "newExCat": [],
            "newExAmt": ""
        });
    };
    // check if expense have been reconciled
    updateExpenseStatus = (expense) => {
        let updatedExpense = {
            ...expense, reconciled: !expense.reconciled
        };
        let updatedExpenseList = this.state.expense.map((expense)=> {
            if (expense.id !== updatedExpense.id) {
                return expense;
            } else {
                return updatedExpense;
            }
        })
        this.setState({
            "expense": updatedExpenseList
        })
    }

    deleteExpense = (expense) => {
        let index = this.state.expense.findIndex((e) => {
            return e.id === expense.id
        })
        let updatedExpense = [
            ...this.state.expense.slice(0, index),
            ...this.state.expense.slice(index + 1)
        ];
        this.setState({
            expense: updatedExpense
        });
    };
    

    render() {
        return <React.Fragment>
            <h1>Budget Tracker</h1>
                {
                    this.state.expense.map((e) =>(
                        <ul key = {e.id}>
                            <button onClick={()=>{
                                    this.deleteExpense(e)
                                }}>Delete</button>
                            <h3>Expense {e.id}</h3>
                            <li>Date: {e.date}</li>
                            <li>Description: {e.description}</li>
                            <li>Category: {e.category}
                        {/* <select
                            name="category"
                            value={this.state.category}
                        >
                            {this.state.all_category.map(category => {
                                return (
                                    <React.Fragment>
                                        <option value={category.value}>{category.display}</option>
                                    </React.Fragment>
                                );
                            })}
                        </select> */}
                    </li>
                            <li>Amount: ${e.amount}</li>
                            <p>{e.reconciled}
                            <input type="checkbox" checked={e.reconciled} onChange={()=>{
                                    this.updateExpenseStatus(e)}}/>Reconciled</p>
                        </ul>
                    ))
                }

            <h2>Create new expense</h2>
            <div>
                <button onClick={this.addExpense}>Add</button>
                <div>
                    <label>Date: </label>
                    <input type="text" name="newExDate" value={this.state.newExDate} onChange={this.updateForm}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="newExDes" value={this.state.newExDes} onChange={this.updateForm}/>
                </div>
                <div>
                    <label>Category: </label>
                    <select
                                name="newExCat"
                                value={this.state.newExCat}
                                onChange={this.updateForm}
                            >
                                {this.state.all_category.map(newExCat => {
                                    return (
                                        <React.Fragment>
                                            <option value={newExCat.value}>{newExCat.display}</option>
                                        </React.Fragment>
                                    );
                                })}
                    </select>
                </div>
                <div>
                    <label>Amount: </label>
                    <input type="text" name="newExAmt" value={this.state.newExAmt} onChange={this.updateForm}/>
                </div>
            </div>
            
        </React.Fragment>
    }
        
}