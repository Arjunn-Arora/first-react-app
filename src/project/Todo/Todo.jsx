import { useState } from "react";
import "./Todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        setTask((prev) => [...prev, inputValue]);

        if(task.includes(inputValue)){setInputValue(""); return;} 
        console.log(task);

        setInputValue("");

    }

    return(
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">Date - Time</h2>
            </header>
            <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(e) => handleInputChange(e.target.value)}/>
                        </div>
                        <div>
                            <button type="submit" className="todo-btn">Add Task</button>
                        </div>
                    </form>
                </section>
                <section className="myUnorderedList">
                    <ul>
                        {
                            task.map((currElem, index) => {
                                return(
                                    <li key={index} className="todo-item"><span>{currElem}</span>
                                    <button className="check-btn"><MdCheck /></button>
                                    <button className="delete-btn"><MdDeleteForever /></button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
        </section>
        </>
    );
}