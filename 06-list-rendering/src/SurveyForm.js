import React from "react";

export default class SurveyForm extends React.Component {
    state = {
        fullname: "",
        email: "",
        gender: "",
        hobbies: [],
        country: "",
        all_genders: [
            {
                'value': 'M',
                'display': 'Male'
            },
            {
                'value': 'F',
                'display': 'Female'
            },
            {
                'value': 'U',
                'display': 'Unspecified'
            }
        ],
        all_hobbies: [
            {
                'value': 'stamps-collecting',
                'display': 'Stamps Collecting'
            },
            {
                'value': 'sleeping',
                'display': 'Sleeping'
            },
            {
                'value': 'running',
                'display': 'Running'
            },
            {
                'value': 'swimming',
                'display': 'Swimming'
            }
        ],
        all_countries: [
            {
                'value': 'sg',
                'display': 'Singapore'
            },
            {
                'value': 'ma',
                'display': 'Malaysia'
            },
            {
                'value': 'in',
                'display': 'Indoensia'
            }
        ]
    };

    renderGenders() {
        //   make into a list
        let final = [];
        //   loop all the gender
        for (let g of this.state.all_genders) {
            //   make jsx into a variable
            let jsx =
                <React.Fragment>
                    <input
                        type="radio"
                        // value from object will be iterated
                        value={g.value}
                        name="gender"
                        onChange={this.updateField}
                    /><span>{g.display}</span>
                </React.Fragment>
            //   append into final
            final.push(jsx);
        }
        return final;
    }

    updateField = (event) => {
        this.setState({
            // event object when person type
            // target is where the change is made
            // name is the name in fullname
            // [] around is a variable that changes when the target changers
            [event.target.name]: event.target.value
        });
    };

    updateCheckboxes = (event) => {
        // if item not in array then add to array
        if (!this.state.hobbies.includes(event.target.value)) {
            // 1. make a copy of the array from state
            // ... is spread operator like c[0] = this.state.hobbies[0]
            let modifiedCopy = [...this.state.hobbies, event.target.value]
            // 2. modify the copy
            // IF ABOVE STATEMENT NOT IN THEN ADD THIS ONE!!!
            // modifiedCopy.push(event.target.value)
            // 3. replace the array with modified copy
            this.setState({
                hobbies: modifiedCopy
            });
        } else {
            // if the hobby is in the copy remove it if not stay
            let modifiedCopy = this.state.hobbies.filter(function (hobby) {
                if (hobby == event.target.value) {
                    return false;
                } else {
                    return true
                }
            })
            this.setState({
                hobbies: modifiedCopy
            })
        }
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname" value={this.state.fullname}
                        onChange={this.updateField}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email}
                        onChange={this.updateField} />
                </div>
                <div>
                    <label>Gender</label>
                    {this.renderGenders()}
                    {/* <input type="radio" value="M" name="gender" onChange={this.updateField}/>Male
                    <input type="radio" value="F" name="gender" onChange={this.updateField}/>Female
                    <input type="radio" value="U" name="gender" onChange={this.updateField}/>Unspecified */}
                </div>
                <div>
                    <label>Hobbies</label>
                    {/* same as the all gender but using map fucntion */}
                    {this.state.all_hobbies.map(hobby => {
                        return <React.Fragment>
                            <input
                                type="checkbox"
                                value={hobby.value}
                                name="hobbies"
                                onChange={this.updateCheckboxes}
                            />
                            <span>{hobby.display}</span>
                        </React.Fragment>
                    })}

                </div>
                <div>
                    <label>Country</label>
                    <select
                        name="country"
                        onChange={this.updateField}
                        value={this.state.country}
                    >
                        {this.state.all_countries.map(country => {
                            return (
                                <React.Fragment>
                                    <option value={country.value}>{country.display}</option>
                                </React.Fragment>
                            );
                        })}
                    </select>
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }

}
