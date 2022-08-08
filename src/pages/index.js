import * as React from "react"
import {useState} from 'react'
import "./App.css"
import Form from"../components/form"
import List from"../components/list"
// import { Link } from 'gatsby'

const HomePage = () => {
    const [InputText, SetInputText] = useState("");
    const [todos, SetTodo] = useState([]);
    return(
        <div className="App">
        <title>BAS to DO</title>
         <header>
            <h1>BAS to DO</h1>
         </header>
         <p align="center">A simple way to create "to do" lists</p>
         <Form InputText={InputText} todos={todos} SetTodo={SetTodo} SetInputText={SetInputText} />
         <List todos={todos}/>

      </div>
    )
}

export default HomePage
