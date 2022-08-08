import * as React from "react"

const Form = () => {
    return(
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="square"></i>
            </button>
            <div className="select">
                <select name="todo" className="sort-todo">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    )
}

export default Form 
