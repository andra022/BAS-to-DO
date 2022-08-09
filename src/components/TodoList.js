import * as React from "react"
import Todo from "./Todo"

const TodoList = ( {todos, setTodos, filteredTodos} ) => {
    // const {FilteredTodos} = props; 
    return(
        <div className="container">
            <ul className="todo-list">
                { filteredTodos.map ( (todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo} 
                        text={todo.text} 
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default TodoList 
