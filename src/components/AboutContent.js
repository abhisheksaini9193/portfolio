import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import reactjs from "../images/reactjs.jpg"
import frontend from "../images/frontend.jpg"
import React from 'react'

const AboutContent = () => {
  return(
     <div className="about">
    <div className="left">
       <h1>Who AM I?</h1>
       <p>I'm a react front-end-developer. I create 
        responsive secure websites for
         my clients.</p> 
   <Link to="/contact">
    <button className="btn">Contact</button>
   </Link>
    </div>
    <div className= "right">
        <div className= "img-container">
          <div className= "img-stack top">
            <img src={frontend} className="img" alt="true"/>
            </div>  
            <div className= "img-stack bottom">
                <img src={reactjs} className="img" alt="true"/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AboutContent
