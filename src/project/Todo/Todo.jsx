import { useState } from "react";
import "./Todo.css"

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
    }

    return(
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
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
        </section>
        </>
    );
}