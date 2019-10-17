import React, { Component } from 'react'
import "./pag.css"
import Home from "./header.jsx"
import Footer from "./footer.jsx"
import Axios from 'axios';

export default class home extends Component 
{
    state = {
        emp: [],
        empId:"",
        empName:'',
        empType:'',
        projectId:'',
      }

    componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/emp`)
          .then(res => {
            //console.log(res);
             this.setState({ emp:res.data });
            // console.log( this.setState);
          })
          this.refreshEmp();
    }
    refreshEmp() {
        Axios.get("http://localhost:8080/dt/api/v1/emp")
        .then(res => {       
          this.setState({ emp:res.data });
        });
      }

      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/emp/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshEmp(res);  
          window.alert(" Employee deleted successfully");
        });
      }
      handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/emp/${id}`
          )
          .then(result => { 
    
            this.setState({             
              empId:result.data.empId,
              empName: result.data.empName,
              empType: result.data.empType,
              projectId: result.data.projectId,
              
            });
          });
    }
      handleAdd=(e)=>{ 
        e.preventDefault();
        Axios.post("http://localhost:8080/dt/api/v1/emp/",{
          empId:this.state.empId,
          empName:this.state.empName,
          empType:this.state.empType,
          projectId:this.state.projectId
        })
        .then(res=>
         {
          console.log( this.state);        
          window.alert("Employee added successfully");
          this.refreshEmp(res);
          
         }
        ) 
        
      }

      handleChangeeid =(e)=>{
        this.setState({empId:e.target.value});
        console.log( e);
       }
      handleChangeempname =(e)=>{
        this.setState({empName:e.target.value});
        console.log( e);
       }
       handleChangeptype =(e)=>{
        this.setState({empType:e.target.value});
        console.log( e);
       }
       handleChangepid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }


    render()
     {
      return(
         
                <div>
                <Home/> 
                <a href = "/back"><button class="editbtn1">HOME</button></a>
                <div className="leftnav">
                <h1 className="navi">ADD EMPLOYEE </h1> 
                <form className="for" onSubmit={this.handleAdd}>   
                    <label>ID</label><br></br>
                    <input type="text" name="empId" placeholder="ENTER YOUR  EMPLOYEE ID" value={this.state.empId}onChange={this.handleChangeeid}></input>                                   
                    <label>NAME</label><br></br>
                    <input type="text" name="empName" placeholder="ENTER YOUR NAME" value={this.state.empName}onChange={this.handleChangeempname}></input>
                    <label>TYPE</label><br></br>
                    <input type="text" name="empType" placeholder="ENTER YOUR EMPLOYEE TYPE" value={this.state.empType}onChange={this.handleChangeptype}></input>
                    <label>PROJECT ID</label><br></br>
                    <input type="text" id="id" name="projectId" placeholder="ENTER PROJECT ID" value={this.state.projectId}onChange={this.handleChangepid}></input>                           
                    <input type="submit" value="SAVE"></input>&emsp;
                    <button type="reset" className="reset" value="RESET">RESET</button>&nbsp;&nbsp;&nbsp; 
                    </form>     
                </div>


                <div className="rightnavemp">
                <h1 className="navi">EMPLOYEE TABLE</h1> 
                    
                    <div className="ad1">                    
                    </div>
                    <form>                    
                    <table id="customers">
                        <tr>
                           <th>ID</th>                            
                           <th>NAME</th>
                           <th>TYPE</th>
                           <th>PROJECT ID</th>                        
                           <th>EDIT</th>
                           <th>DELETE</th> 
                           
                        </tr>
                        { this.state.emp.map(e=>{
                        return( 
                         <tr>
                         <td>{e.empId}</td>
                         <td>{e.empName}</td>
                         <td>{e.empType}</td>
                         <td>{e.projectId}</td>                         
                         <td><button class="editbtn" onClick={()=>this.handleEdit(e.empId)}>EDIT</button></td>
                         <td><a href={`/update/${e.empId}`}><button class="editbtn" onClick={()=>this.handleDelete(e.empId)}>DELETE</button></a></td>
                        </tr>) 
                    }) }
                    
                    </table><br></br>
                                     
                   </form>
                   </div>
                <br></br><br></br><br></br><br></br><br></br>
                  <Footer/> 
                </div>
      )
     }
    }
                