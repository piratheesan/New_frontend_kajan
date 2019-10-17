import React, { Component } from 'react'
import "./pag.css"
import Home from "./header.jsx"
import Footer from "./footer.jsx"
import Axios from 'axios';

export default class home extends Component 
{
    state  = {
        projects: [], 
        projectId:"",
        projectName:'',
        projectDescription:'',
        
      }

      componentDidMount() {    

        Axios.get("http://localhost:8080/dt/api/v1/project")
            .then(res => {              
               this.setState({ projects:res.data });             
            })
            this.refreshProject();
      }
      handleAdd=(e)=>{ 
        e.preventDefault();
        Axios.post("http://localhost:8080/dt/api/v1/project/",{projectId:this.state.projectId,projectName:this.state.projectName,projectDescription:this.state.projectDescription})
        .then(res=>
         {
        //   console.log( this.state);        
          window.alert("Project added successfully");
          this.refreshProject(res);
          
         }
        ) 
        
      }
     
      refreshProject() {
          Axios.get("http://localhost:8080/dt/api/v1/project")
          .then(res => {
          this.setState({ projects:res.data });
          });
        }
        handleEdit(id){
          Axios
            .get(
              `http://localhost:8080/dt/api/v1/project/${id}`
            )
            .then(result => { 
      
              this.setState({             
                projectId:result.data.projectId,
                projectName: result.data.projectName,
                projectDescription: result.data.projectDescription
                
              });
            });
      }
      
      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/project/" + id)
        .then(res => {    
          this.refreshProject(res);  
          window.alert(" Project deleted successfully");
        });
      }  
     
      handleChangepid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }
      handleChangepname =(e)=>{
        this.setState({projectName:e.target.value});
        console.log( e);
       }
       handleChangepdes =(e)=>{
        this.setState({projectDescription:e.target.value});
        console.log( e);
       }
    

    render()
     {
      return(
          <div>
                <div>
                <Home/> 
                <a href = "/back"> <button class="editbtn1">HOME</button></a>
                <div className="leftnav">
                <h1 className="navi">ADD PROJECTS </h1> 
                    <form className="for" onSubmit={this.handleAdd}>                       

                        <label>ID</label><br></br>
                        <input type="text" name="projectId" className="text" placeholder="ENTER YOUR DESTRIPTION" value={this.state.projectId}onChange={this.handleChangepid}></input>

                        <label>DESTRIPTION</label><br></br>
                        <input type="text" name="projectName" className="text" placeholder="ENTER YOUR DESTRIPTION" value={this.state.projectDescription}onChange={this.handleChangepdes}></input>

                        <label>NAME</label><br></br>
                        <input type="text" name="projectDescription"  className="text" placeholder="ENTER YOUR NAME" value={this.state.projectName}onChange={this.handleChangepname}></input>
                    
                    
                    <input type="submit" value="SAVE"></input> &emsp;
                    <button type="reset" className="reset" value="RESET">RESET</button>&nbsp;&nbsp;&nbsp; 
                    </form>
                </div>
                
                <div className="rightnav">
                <h1 className="navi">PROJECTS TABLE</h1> 
                    
                    <div className="ad1">                   
                    </div>
                    <form>                   
                    <table id="customers">
                        <tr>
                            <th>ID</th>
                            <th>DESCRIPTION</th>
                            <th>NAME</th>
                            <th>EDIT</th>
                            <th>DELETE</th>       
                        </tr>
                        { this.state.projects.map(p=>{
                        return(                
                         <tr>
                            <td>{p.projectId}</td>
                            <td>{p.projectDescription}</td>
                            <td>{p.projectName}</td>                         
                            <td><button class="editbtn" onClick={()=>this.handleEdit(p.projectId)}>EDIT</button></td>
                            <td><button class="editbtn" onClick={()=>this.handleDelete(p.projectId)}>DELET</button></td>
                        </tr>
                        ) 
                    }) }
                    
                    </table><br></br>                                     
                    </form>                   
                    </div>
                    </div>             
                   <br></br><br></br><br></br><br></br><br></br>
                    <Footer/> 
                    </div>
      )
     }
    }
                