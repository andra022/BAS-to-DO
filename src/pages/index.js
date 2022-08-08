import * as React from "react"
import "./App.css"
import Form from"../components/form"

const HomePage = () => {
    return(
        <div className="App">
        <title>BAS to DO</title>
         <header>
            <h1>BAS to DO</h1>
         </header>
         <p align="center">A simple way to create "to do" lists</p>
         <Form />
      </div>
    )
}

export default HomePage
