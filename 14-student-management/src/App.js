import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import StudentContext from './context/StudentContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentListingPage from "./pages/StudentListingPage";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";

class App extends React.Component {

    state = {
        students: []
    }

    async componentDidMount() {
        // abstraction of data from JSON or API 
        let r = await Axios.get("/data/students.json");
        this.setState({
            students: r.data
        })
    }

    render() {
        // repository is to handle CRUD
        let repo = {
            getStudents: () => {
                return this.state.students;
            },
            addStudent: (student) => {
                studentNumber = Math.floor(Math.random() * 10000 + 9999);
                this.setState({
                    student:[...this.state.students, student]
                })
            }
        }
        return (
            <React.Fragment>
                <StudentContext.Provider value={repo}>
                    <Router>
                        <Switch>
                            {/* makes it explicit to follow and plan route */}
                            <Route eaxct="/">
                                <React.Fragment>
                                    <StudentListingPage/>
                                </React.Fragment>
                            </Route>
                            <Route eaxct="/add">
                                <React.Fragment>
                                    <AddStudentPage/>
                                </React.Fragment>
                            </Route>
                        </Switch>
                    </Router>
                </StudentContext.Provider>
            </React.Fragment>
        );
    }

}

export default App;
