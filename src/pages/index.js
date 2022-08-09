import React, {useState, useEffect} from 'react'
// import {useState, useEffect} from 'react'
import "./App.css"
import Form from "../components/Form"
import TodoList from "../components/TodoList"

const HomePage = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo1 => todo1.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo1 => todo1.completed === false))
                break;
            default: 
                setFilteredTodos(todos);
                break;
        }
    }

    //Run once when the app starts
    useEffect( () => {
        getLocalTodos();
    }, []
    )

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]

    )

    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }

    return(
        <div className="App">
        <title>BAS to DO</title>
         <header>
            <h1>BAS to DO</h1>
         </header>
         <p align="center">A simple way to create "to do" lists</p>

         <Form 
            inputText={inputText} 
            todos={todos}
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
         />

         <TodoList 
            todos={todos}
            setTodos={setTodos} 
            filteredTodos={filteredTodos}
         />

      </div>
    )
}

export default HomePage
