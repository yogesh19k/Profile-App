import React from "react"

export default function Intro(){
    return (
        <header className="intro">
            <img src="../images/profile.png" width="317px"/>
            <h3>L Yogesh Kumar</h3>
            <p>Fronted Developer</p>
            {/* <h6>yogeshkumar.website</h6> */}
            <div className="intro--buttons">
                <a href="mailto: l.yogesh19k@gmail.com" >
                    <button className="intro--button1">
                        <img src="../images/Email-logo.png" width="16px"/>
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/l-yogesh-kumar-17b083bb/">
                    <button className="intro--button2">
                        <img src="../images/linkedin-logo.png" width="16px"/>
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </header>
    )
}