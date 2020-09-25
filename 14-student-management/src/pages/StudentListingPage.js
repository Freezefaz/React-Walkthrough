import React, {useContext} from "react";
import StudentContext from "../context/StudentContext";

export default function StudentListingPage() {
    const context = useContext(StudentContext)
    // for testing
    // console.log(context.getStudent());
    return <React.Fragment>
        <h1>Student Lisiting</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Student Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Graduated</th>
                </tr>
            </thead>
            {context.getStudents.map(s => (
                <React.Fragment>
                    <tr>
                        <th>{s.studentNumber}</th>
                        <th>{s.firstName}</th>
                        <th>{s.lastName}</th>
                        <th>{s.graduated}</th>
                    </tr>
                </React.Fragment>

            ))}
        </table>

    </React.Fragment>

}