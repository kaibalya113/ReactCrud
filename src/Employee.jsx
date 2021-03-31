import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import profile from './Profile'


const Employee=()=>{
    const [employeeList, setEmployeeList] = useState([])
    const getEmployee  = `http://192.168.1.210:8080/call/user/8`;
    // useEffect(() => {
    //     axios.get("192.168.1.210:8080/call/alluser").then((response) =>{
    //         setEmployeeList(response.data)
    //         console.log(response.data)
    //         alert(response.data)
    //     })
        
    // }, [])
    useEffect(() =>{
        async function getData(){
            const res = await axios.get("http://192.168.1.210:8080/call/alluser",{
                headers:{ "Content-Type": "application/x-www-form-urlencoded"}
            });
           // console.log(res.data[0]);
            setEmployeeList(res.data);
           
        }

    getData(); 
    })
    const [employeeData, setemployeeData] = useState([])
    const getEmployeeData=(id)=> {
       // alert(id);
        // call the axios to fetch employee datta and redirect those data to next page  const getEmp =
        axios.post(`http://192.168.1.210:8080/call/user/${id}`).then((res)=>{
            console.log(res.data);
            setemployeeData(res.data);
            
            console.log(employeeData)
        }, (error)=>{
            console.log(error);
        })
        // redirect to another page
        
       

    }
    return(
        <>
        <h3>Employee List</h3>
        <table className="table table-striped table-bordered" id="customers">
            <thead>
                <tr>

                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                 {
                    employeeList.map(employee=>
                        <tr key={employee.id}  >
                        <td key={employee.id}><NavLink exact to={{
                                                            pathname:`/profile/${employee.id}`, 
                                                            aboutProps:{key : employee.id}
                                                            }}>
                                                            {employee.fName}</NavLink></td>
                        <td>{employee.lName}</td>   
                        <td>{employee.age}</td>
                        <td>{employee.role}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Switch>
       
        <Route path='/profile' component={profile}></Route>
        
      </Switch>
        </>
        )
}
export default Employee;