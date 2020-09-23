import React from "react";


export default function Task(props) {
    return (
     <li>
        <button onClick={()=>{
            this.deleteTask(props.task)
        }}>Delete</button>
        <button onClick={()=>{
            this.startEditingTask(props.task)
        }}>Edit</button>
        <input type="checkbox" checked={props.task.done} onChange={()=>{
            this.updateTaskStatus(props.task)
        }}/>{props.task.description} 
    </li>
    )
}