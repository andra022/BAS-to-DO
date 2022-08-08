import * as React from "react"

const Form = ({SetInputText, todos, SetTodo, InputText}) => {
     const InputTextHandler = (e) => {
        console.log(e.target.value);
        SetInputText(e.target.value);
    }

    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        SetTodo([
            ...todos, { text: InputText, completed: false, id: Math.random() * 100 } 
        ])
        SetInputText("");
    }

    return(
        <form>
            <input value={InputText} onChange={InputTextHandler} type="text" className="Todo-input" />
            <button onClick={SubmitTodoHandler} className="Todo-button" type="submit">
                <i className="square"></i>
            </button>
            <div className="select">
                <select name="Todos" className="sort-Todo">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    )
}

export default Form 
