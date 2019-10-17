import React, { Component } from 'react'
import "./pag.css"
//import Img from "../img/6.png"


export default class home extends Component 
{

    render()
         {
   return (
         
         <div>

         
          {/* <div className="img1">
           <img src={Img} height="50px" width="100" />  
           </div>    */}
           <br></br>
           <h2 className="navi1">DEFECT TRACKER SYSTEM</h2> 
           <br></br>
                    <div className="but">
                     <a href = "/viewDefect"><button class="button button1">DEFECTS ADD & VIEW</button></a><br></br><br></br>
                     <a href = "/viewProject"><button class="button button2">PROJECTS ADD & VIEW</button></a><br></br><br></br>
                     <a href = "/viewEmployee"> <button class="button button3">EMPLOYEE ADD & VIEW</button></a>
                     </div>
         </div>            
        
                 
                           
      )
     }
    }