import React from "react"

export default function Intro(){
    return (
        <header className="intro">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="317px"/>
            <h3>L Yogesh Kumar</h3>
            <p>Fronted Developer</p>
            <h6>yogeshkumar.website</h6>
            <div className="intro--buttons">
                <button className="intro--button1">
                    <img src="../images/Email-logo.png" width="16px"/>
                    <p>Email</p>
                </button>
                <button className="intro--button2">
                    <img src="../images/linkedin-logo.png" width="16px"/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </header>
    )
}