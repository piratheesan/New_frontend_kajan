import React, { Component } from 'react'
import "./pag.css"
//import Img from "../img/images.png"


export default class home extends Component 
{
    render()
     {
      return(
        <form>
          <div  className="myHeader" >
              <div className="h1">
              <h1>WELCOME TO DEFECT TRACKER SYSTEM</h1>
              </div>
          
            
          <div className="sear">
         
                 <input type="search" name="search" placeholder="Search.."></input></div>
               
            </div> 
         
            </form> 

                                  
      )
     }
    }