import * as React from "react"

const ToDoList = ({ text }) => {
    const deleteHandler = () => {

    }

    return(
        <div className="todoClass">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="check"></i>
            </button>
            <button className="trash-btn">
                <i className="trash"></i>
            </button>
        </div>
    )
}

export default ToDoList