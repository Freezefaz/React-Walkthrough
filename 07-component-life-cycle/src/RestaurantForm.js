import React from "react";
import axios from "axios"

export default class RestaurantForm extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        menu: [],
        all_seatings:[
            {
                "value": "O",
                "display": "Outdoors"
            },
            {
                "value": "I",
                "display": "Indoors"
            },
            {
                "value": "V",
                "display": "VIP"
            }
        ],
        all_smoking: [
            {
                "value": "S",
                "display": "Smoking"
            },
            {
                "value": "N",
                "display": "Non-smoking"
            }
        ],
        all_menu: [
 
        ]
    };

    async componentDidMount() {
        let response  = await axios.get("menu.json")
        let menu = response.data

        this.setState ({
            "all_menu": menu
        })
    }

    updateField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    updateCheckboxes = (event) => {
        // if item not in array then add to array
        if (!this.state.menu.includes(event.target.value)) {
            // 1. make a copy of the array from state
            // ... is spread operator like c[0] = this.state.hobbies[0]
            let modifiedCopy = [...this.state.menu, event.target.value]
            // 2. modify the copy
            // IF ABOVE STATEMENT NOT IN THEN ADD THIS ONE!!!
            // modifiedCopy.push(event.target.value)
            // 3. replace the array with modified copy
            this.setState({
                menu: modifiedCopy
            });
        } else {
            // if the hobby is in the copy remove it if not stay
            let modifiedCopy = this.state.menu.filter(function (menu) {
                if (menu == event.target.value) {
                    return false;
                } else {
                    return true
                }
            })
            this.setState({
                menu: modifiedCopy
            })
        }
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateField}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateField}/>
                </div>
                <div>
                    <label>Seating</label>
                     {this.state.all_seatings.map(seating => {
                        return <React.Fragment>
                            <input
                            type = "radio"
                            value = {seating.value}
                            name = "seatings"
                            onChange={this.updateField}/>
                            <span>{seating.display}</span>
                        </React.Fragment>
                        })}
                </div>
                <div>
                    <label>Smoking</label>
                    <select
                        name="Smoking"
                        onChange={this.updateField}
                        value={this.state.smoking}
                    >
                        {this.state.all_smoking.map(smoking => {
                            return (
                                <React.Fragment>
                                    <option value={smoking.value}>{smoking.display}</option>
                                </React.Fragment>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label>Menu</label>
                    {this.state.all_menu.map(menu => {
                        return <React.Fragment>
                            <input
                                type="checkbox"
                                value={menu.value}
                                name="menu"
                                onChange={this.updateCheckboxes}
                            />
                            <span>{menu.display}</span>
                        </React.Fragment>
                    })}

                </div>
                <button>Submit</button>

            </React.Fragment>
        )
    }

}