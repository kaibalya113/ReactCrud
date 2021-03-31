import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Dashboard=()=>{
    const [usersData, setUser] = useState([
        { 
            "fname": "",
            "lname": "",
            "age": "",
           
            "password":"",
            "role":""
        }
    ]);

    const searchUser=(e)=>{
        const enteredVal = e.target.value;
        // console.log(enteredVal);
        axios.post(`http://192.168.1.210:8080/call/getuser/`,
           {
                name: enteredVal
            }
        ).then((res) =>{
            // if(res.data !== null){
            //     for (let i=0; i<res.data.length;i++){
            //         setUser.push(res.data[i]);
            //         console.log(res.data[i])
            //     }
            // }
            setUser(res.data);
            console.log(usersData);
        })
        


    }
    // useEffect((e) => {
    //     const enteredVal = e;
    //     console.log(enteredVal);
    //     return () => {
            
    //     }
    // })
    return(
        <>
            <h3>YOU ARE IN DASHBOARD</h3>
             {/* here we will implement search operation */}
             <input type="search" placeholder="Enter Name To Search" onChange={searchUser}></input>
             <div id="result">
             <table className="table table-striped table-bordered" id="customers">
            <thead>
                <tr>

                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                   
                    
                </tr>
            </thead>
            <tbody>
                  {
                    usersData.map(employee=>
                        <tr key={employee.id}  >
                        <td key={employee.id}>{employee.fName}</td>
                        <td>{employee.lName}</td>   
                        <td>{employee.age}</td>
                        <td>{employee.role}</td>
                        </tr>
                    )
                } 
                </tbody>
        </table>
             </div>
            
        </>
        )
}
export default Dashboard;