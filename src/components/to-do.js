import React from "react"

const Todo = ({ text, setTodos, todos, todo1 }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo1.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item)=> {
            if(item.id === todo1.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo1.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check">✔</i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash">🗑</i>
            </button>
        </div>
    )
}

export default Todo;

// dfjdhkd