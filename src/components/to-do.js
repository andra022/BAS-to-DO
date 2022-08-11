import React from "react"

const Todo = ({ text, setTodos, todos, todo1, id }) => {

    console.log("id: ",id);
    const deleteHandler = (e) => {
        setTodos(
            todos.filter((el) => el.id !== todo1.id)
        );
        console.log("parent node: ",e.target.parentNode.id);
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
        <div className="todo" id={'todo' + id }>
            
            <li className={`todo-item ${todo1.completed ? "completed" : ""} `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="check">✔</i>
            </button>
            
            
            <button onClick={deleteHandler} className="trash-btn">
                 <i className="trash">🗑</i>
            </button>

        </div>
    )
}

export default Todo;
