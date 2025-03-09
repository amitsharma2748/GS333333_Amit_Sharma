import React from 'react'
import SideBar from './SideBar'
import "../styles/indexSideNav.css"
import NavHeader from './NavHeader'
import { Outlet } from 'react-router-dom'

const SideNavHeaderComponent = () => {
  return (
    <div className="nav-container"> 
    <NavHeader/>
    <div className='d-flex gap-3'>
        <SideBar/>
        <div className='outlet-container'>
        <Outlet/>
        </div>
    </div>

   </div>
  )
}

export default SideNavHeaderComponent