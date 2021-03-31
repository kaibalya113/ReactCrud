import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";

const Profile=(props)=>{
  const userId = props.location.aboutProps.key;
    let ajaxRequest = null; 
    // if(props.location.aboutProps.key == null){
    //     props.location.aboutProps.key == props.location.search;
    // }else{
        
    // }
  //  console.log(props.location.search)
    const [employeeData, setemployeeData] = useState([])
    useEffect(() =>{
        if (ajaxRequest ) {
            ajaxRequest.cancel(); 
        }
        ajaxRequest = axios.CancelToken.source();  
        
      //  alert(props.location.aboutProps.key)
        async function getData(){
             await axios.post(`http://192.168.1.210:8080/call/user/${userId}`, { cancelToken: ajaxRequest.token }).then((res)=>{
              //  console.log(res.data);
                setemployeeData(res.data);
                
               // console.log(employeeData)
                
             }, (error)=>{
                if (axios.isCancel(error)) {
                    console.log('Previous request canceled, new request is send', error.message);
                 } else {
                        // handle error
                 }
                 console.log(error);
             })
           
           
        }

    getData(); 
    })
    
const styles = {
  image: {
    width: 150,
    height: 150,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 75
  },
};

const deleteUser=()=>{
  // delete
  alert("hi")
  console.log("user deleting...")
}
const saveCurrent=()=>{
  
}
    
    return(
    <>
    
    <h3>Employee Profile</h3>
        <img
      style={styles.image}
      
      resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
    />


    
    <h4>{employeeData.fName} {employeeData.lName}</h4>
    <div>
      <button onclick ={deleteUser}> Delete</button> <button onclick={saveCurrent}> Save</button>
    </div>
    </>
    
    )
};
export default Profile;