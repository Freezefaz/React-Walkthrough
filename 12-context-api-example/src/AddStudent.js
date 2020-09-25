import React from 'react';
import StudentContext from "./StudentContext"


export default class AddStudentt extends React.Component {
    // a state where they have the same properties in a class
    // this is for class base components if function base see ProductListing using const
    static contextType = StudentContext
    state = {
        "name": "",
        "year": "",
        "gender":"",
        "graduated":""
    }
    updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

// is inside App js so that can access controller and do function
  addStudent = () => {
    this.context.addStudent(this.state.name, this.state.year, this.state.gender, this.state.graduated);
    
  }

    render() {
        return (
            <React.Fragment>
        <div>
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="number"
            name="year"
            value={this.state.year}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Graduated</label>
          <input
            type="text"
            name="graduated"
            value={this.state.graduated}
            onChange={this.updateFormField}
          />
        </div>
        <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
      </React.Fragment>

        )
    }
}
