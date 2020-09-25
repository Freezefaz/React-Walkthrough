import React, { useContext } from "react";
import StudentContext from "./StudentContext";
import AddStudent from "./AddStudent";

export default function StudentList() {
    // call the controller to make it available
    // need to specify which context to use
    const controller = useContext(StudentContext);
    console.log(controller)

    return (
        <React.Fragment>
            <h1>Students</h1>
            <ul>
                {controller.students().map((s) => {
                    return (
                    <React.Fragment>
                        <p>{s.name}</p>
                        <li>{s.year}</li>
                        <li>{s.gender}</li>
                        <li>{s.graduated}</li>
                    </React.Fragment>
                    
                )}
            )}
            </ul>
            {/* inside productlisitng so that addproducts can access product context */}
            <AddStudent/>
        </React.Fragment>
    )
}