import React, { Component } from 'react'
import "./pag.css"
import Home from "./header.jsx"
import Footer from "./footer.jsx"
import Axios from 'axios';


export default class home extends Component 
{
    state = {
        defects: [], 
        defectId:"",
        defectName:"",
        defectDescription:"",
        empId:"",
        priorityChoices:"",
        projectId:"",
        severityChoices:"",
        status:"",
      }


      componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/defect`)
          .then(res => {
            console.log(res);
             this.setState({ defects:res.data });
             console.log( this.setState);
          })
          this.refreshDefect();
    }

    handleAdd=(e)=> { 
      e.preventDefault();
      Axios.post("http://localhost:8080/dt/api/v1/defect",{
        defectId:this.state.defectId,
        defectName:this.state.defectName,
        defectDescription:this.state.defectDescription,
        empId:this.state.empId,
        priorityChoices:this.state.priorityChoices,
        projectId:this.state.projectId,
        severityChoices:this.state.severityChoices,
        status:this.state.status,
      })
      .then(res=>
       {
        console.log( this.state);        
        window.alert("Defect added successfully");
        this.refreshDefect(res);
        
       }
      ) 
      
    }
    refreshDefect() {
        Axios.get("http://localhost:8080/dt/api/v1/defect")
        .then(res => {
        //   console.warn("Refresh Service is working");
          this.setState({ defects:res.data });
        });
      }

       handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/defect/${id}`
          )
          .then(result => { 
    
            this.setState({             
              defectId:result.data. defectId,
              defectName: result.data.defectName,
              defectDescription: result.data.defectDescription,
              empId:result.data. empId,
              priorityChoices: result.data.priorityChoices,
              projectId: result.data.projectId,
              severityChoices:result.data. severityChoices,
              status: result.data.status ,             
            });
          });
    }

      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/defect/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshDefect(res);  
          window.alert(" defects deleted successfully");
        });
      }

      handleChangedid =(e)=>{
        this.setState({defectId:e.target.value});
        console.log( e);
       }
       handleChangedname=(e)=>{
        this.setState({defectName:e.target.value});
        console.log( e);
       }
       handleChangeddesc =(e)=>{
        this.setState({defectDescription:e.target.value});
        console.log( e);
       }
       handleChangedeid =(e)=>{
        this.setState({empId:e.target.value});
        console.log( e);
       }
       handleChangedpriority =(e)=>{
        this.setState({priorityChoices:e.target.value});
        console.log( e);
       }
       handleChangedpid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }
       handleChangedseverity =(e)=>{
        this.setState({severityChoices:e.target.value});
        console.log( e);
       }
       handleChangedstatus =(e)=>{
        this.setState({status:e.target.value});
        console.log( e);
       }
     
    render()
     {
      return(
          <div>
                
                <Home/> 
                <a href = "/back"> <button class="editbtn1">HOME</button></a>
                <div className="leftnav">
                <h1 className="navi">ADD DEFECTS </h1> 
                    <form className="for" onSubmit={this.handleAdd}>                 

                        <label>ID</label><br></br>
                        <input type="text" name="defectId" placeholder="ENTER YOUR ID" value={this.state.defectId}onChange={this.handleChangedid}></input>

                        <label>DESTRIPTION</label><br></br>
                        <input type="text" name="defectDescription" placeholder="ENTER YOUR DESTRIPTION"value={this.state.defectDescription}onChange={this.handleChangeddesc}></input>

                        <label>NAME</label><br></br>
                        <input type="text" name="defectName" placeholder="ENTER YOUR NAME" value={this.state.defectName}onChange={this.handleChangedname}></input>

                        <label>EMPLOYEE ID</label><br></br>
                        <input type="text" id="id" name="empId" placeholder="ENTER EMPLOYEE ID" value={this.state.empId}onChange={this.handleChangedeid}></input>

                        <label>PROJECT ID</label><br></br>
                        <input type="text" id="id" name="projectId" placeholder="ENTER PROJECT ID" value={this.state.projectId}onChange={this.handleChangedpid}></input>
                     
                          <label>PRIORITY</label>
                            <select PRIORITY="PRIORITY" name="priorityChoices" value={this.state.priorityChoices}onChange={this.handleChangedpriority}>
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>

                            <label>SEVERITY</label>
                            <select SEVERITY="SEVERITY" name="severityChoices" value={this.state.severityChoices}onChange={this.handleChangedseverity}>
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>
                                               
                        <label>STATUS</label>
                        <textarea type="text" id="comments" name="status" value={this.state.status}onChange={this.handleChangedstatus}>
                          say something!
                        </textarea>             
                                    
                    <input type="submit" value="SAVE"></input>&emsp;
                    <input type="reset" className="reset" value="RESET"></input>&nbsp;&nbsp;&nbsp; 
                    </form>                 
                </div>
                <div className="rightnavdef">
                <h1 className="navi">DEFECT TRACKER TABLE</h1> 
                    
                    <div className="ad1">                        
                        </div>
                        <form>
                        <center>
                        <table id="customers">
                            <tr>
                                <th>ID</th>
                                <th>DESTRIPTION</th>
                                <th>NAME</th>
                                <th>EMPLOYEE ID</th>
                                <th>PROJECT ID</th>
                                <th>PRIORITY</th>
                                <th>SEVERITY</th>
                                <th>SATUS</th>                                
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                            { this.state.defects.map(d=>{
                            return( 

                            <tr>
                                <td>{d.defectId}</td>
                                <td>{d.defectDescription}</td>
                                <td>{d.defectName}HIGH</td>
                                <td>{d.empId}</td>
                                <td>{d.projectId}</td>
                                <td>{d.priorityChoices}</td>
                                <td>{d.severityChoices}</td>
                                <td>{d.status}</td>                                
                                <td><button class="editbtn" onClick={()=>this.handleEdit(d.defectId)}>EDIT</button></td>
                                <td><button class="editbtn" onClick={()=>this.handleDelete(d.defectId)}>DELETE</button></td>
                            </tr>)
                            })}
                        </table>
                        </center>                                          
                     </form> 
                     </div> 
                     <br></br><br></br><br></br><br></br><br></br>               
                    <Footer/> 
            </div>
      )
     }
    }
                