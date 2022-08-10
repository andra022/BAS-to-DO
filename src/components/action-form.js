import React from "react"

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
     const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 } 
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="Todo-input" 
                placeholder="Insert your task here ... "
            />

            <button 
                onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit"
            >
                <i className="fas fa-plus-square">⬇</i>
            </button>
            
            <br />
            <br />

            <div className="select">
                <select 
                    onChange={statusHandler} 
                    name="todos" 
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Done</option>
                    <option value="uncompleted">Pending ... </option>
                </select>
            </div>
        </form>
    )
}

export default Form 

// hagdhd
