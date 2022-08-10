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
                        
                        <i className="fas fa-plus-square">
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#64c186" viewBox="0 0 48 48">
                            <path fill="#ffffffcd" d="M24 22.65L1.95 10.5 0 12.45l24 24 24-24-1.95-1.95L24 22.65z"/>
                            </svg>
                        }
                        </i>
                    </button>
                 

                
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

