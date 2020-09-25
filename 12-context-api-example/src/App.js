import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentContext from "./StudentContext";
import StudentList from "./StudentList";

// function App() {
class App extends React.Component {
    state = {
        students: [
            {
                studentNumber: 1,
                name: "Peter Parker",
                year: 1,
                gender: "male",
                graduated: false
            },
            {
                studentNumber: 2,
                name: "Jean Grey",
                year: 2,
                gender: "female",
                graduated: false
            },
            {
                studentNumber: 3,
                name: "Reed Richards",
                year: 3,
                gender: "male",
                graduated: true
            },
        ]
    }

  render(){
      const controller = {
            students: () => {
                return this.state.students;
            },
            addStudent: (name, year, gender, graduated) => {

                let studentNumber = Math.random() * 10000 + 9999;
                
                let newStudent = { studentNumber, name, year, gender, graduated };
                this.setState({
                    "students": [...this.state.students, newStudent]
                })
            }
        }
    return (
        <React.Fragment>
                {/* context becomes the controller */}
                {/* this is where the sharing happens */}
                <StudentContext.Provider value={controller}>
                    {/* anything in here is shared to all components */}
                    <StudentList />
                </StudentContext.Provider>
            </React.Fragment>
    );
  }
}

export default App;
