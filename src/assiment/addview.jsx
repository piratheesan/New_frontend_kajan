import React, { Component } from 'react'
import "./pag.css"
import Home from "./header.jsx"
import Footer from "./footer.jsx"
import Nav from "./navigation.jsx"
// import Img from "../img/images.png"

export default class home extends Component 
{
    render()
     {
      return(
          <div>
                  <Home/> 
                  <Nav />
                  <Footer/> 
                          
        </div>
                            
                            
                 
              
          
      )
     }
    }