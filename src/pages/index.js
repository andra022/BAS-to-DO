import * as React from "react"
import "./App.css"
import Form from"../components/form"
import { Link } from 'gatsby'

const HomePage = () => {
    return(
        <div className="App">
        <title>BAS to DO</title>
         <header>
            <h1>BAS to DO</h1>
         </header>
         <p align="center">A simple way to create "to do" lists</p>
         <Link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"
         ></Link>
        <Link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
            integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
            crossorigin="anonymous"
        ></Link>
        <Link rel="stylesheet" href="./style.css" ></Link>
         <Form />
      </div>
    )
}

export default HomePage
