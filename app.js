import React from "react"
import Intro from "./components/Introduction"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container">
            <Intro/>
            <About/>
            <Footer/>
        </div>
    )
}