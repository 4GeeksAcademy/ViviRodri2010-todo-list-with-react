import React, { useState } from "react";
import Task from "./task";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if(inputValue == ""){
            return;
        }

        let newTaskId = -1;
        let taskIds = tasks.map(i => {
            return i.id;
        })
        for(let i = 0; newTaskId == -1; i++){
            if(i in taskIds){
                continue;
            }
            newTaskId = i;
        }
        
        let task = {
            "id": newTaskId,
            "task": inputValue
        }

        let newTasks = [];
        newTasks = tasks.map(item => {
            return item;
        });
        newTasks.push(task);
        setTasks(newTasks);
    }
    function removeTask(removeId){
        let newTasks = tasks.map(i => {
            return i;
        });
        let taskIndex = newTasks.findIndex(task =>{
            return task.id == removeId;
        })
        newTasks.splice(taskIndex, 1)
        setTasks(newTasks);
    }
    function removeTaskHandler(id){
        removeTask(id);
    }
    return(
        <>
            <div className="container-1">
                <h1 className="heading">todos</h1>
                <div className="input-container">
                    <input className="input" type="text" onChange={e => {
                        setInputValue(e.target.value);
                    }} value={inputValue} placeholder="What needs to be done?"></input>
                    <button className="add-button" onClick={handleAddTask}>+</button>
                </div>
                <div className="task-list-container">
                    <ul className="task-list">
                        {tasks.map(task => {
                            return (
                                <Task props={{
                                    "task": task.task,
                                    "id": task.id,
                                    "removeTaskHandler": removeTaskHandler,
                                }}/>
                            );
                        })}
                    </ul>
            </div>
            </div>
        </>
    )
}

export default TodoList;
