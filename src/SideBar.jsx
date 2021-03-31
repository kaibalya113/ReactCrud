import React from 'react'
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import about from './About'
import employeeList from './Employee'
import dashboard from './Dashboard'
import profile from './Profile'
import logout from './Logout'

const SideBar = ()=>{
    return(
        <>
       <div class="sidenav">
       <NavLink to="/dashboard" activeClassName='is-active'>Dashboard</NavLink><br/>
      {/* <NavLink to="/profile" activeClassName='is-active'>Profile</NavLink><br/> */}
      <NavLink to="/employee" activeClassName='is-active'>Employee List</NavLink><br/>
      <NavLink to="/about" activeClassName='is-active'>About</NavLink><br/>

      <NavLink to="/logout" activeClassName='is-active'>Logout</NavLink><br/>
      </div>
      
      
      <Switch>
        <Route path='/about' component={about}></Route>
        <Route path='/employee' component={employeeList}></Route>
        <Route path='/dashboard' component={dashboard}></Route>
        <Route path='/profile' component={profile}></Route>
        <Route path='/logout' component={logout}></Route>
      </Switch>
        </>
    )
}

export default SideBar;