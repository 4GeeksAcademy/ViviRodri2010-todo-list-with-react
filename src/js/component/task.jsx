import React from "react";

const Task = ({props}) => {
    const task = props.task;
    const id = props.id;

    const removeTaskHandler = () => {
        props.removeTaskHandler(id);
    }
    return(
        <li key={id} className="d-flex task-container">
            <div className="task-name">{task}</div>
            <div className="task-delete-button-container">
                <button type="button" className="border-0 task-delete-button" onClick={removeTaskHandler}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;