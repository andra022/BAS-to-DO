import React from 'react'
import Todo from "./Todo"

const TodoList = ( {todos, setTodos, filteredTodos} ) => {
    return(
        <div className="container">
            <ul className="todo-list">
                { filteredTodos.map ( (todo1) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo1.id} 
                        todo1={todo1} 
                        text={todo1.text} 
                    />
                ))
                }
            </ul>
        </div>
    )
}
// fgfgghh

export default TodoList 
