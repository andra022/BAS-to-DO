import * as React from "react"
import ToDoList from "./toDo"

const List = ( props ) => {
    return(
        <div className="container">
            <ul className="list">
                { (props.todos).map( todoClass => (
                    <ToDoList key={todoClass.id} text={todoClass.text} />
                ))
                }
            </ul>
        </div>
    )
}

export default List 
