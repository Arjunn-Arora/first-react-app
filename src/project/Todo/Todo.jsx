import { useState } from "react";
import "./Todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState({});
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked: false});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue.content) return;

        const ifTodoContentMatched = task.find((currElem) => currElem.content === inputValue.content)

        if(ifTodoContentMatched) return;
        setTask((prev) => [...prev, {id: id, content: inputValue.content, checked: checked}]);

        setInputValue("");

    }

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);


    const handleDeleteTodo = (data) => {
        const updatedTask = task.filter((currElem) => currElem !== data);
        setTask(updatedTask);
    }

    const deleteAllTodo = () => {
        setTask([]);
    }

    return(
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(e) => handleInputChange(e.target.value)}/>
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
                                    <button className="delete-btn" onClick={() => handleDeleteTodo(currElem)}><MdDeleteForever /></button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={deleteAllTodo}>
                        Clear All
                    </button>
                </section>
        </section>
        </>
    );
}