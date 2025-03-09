
import SideBar from './SideBar'
import "../styles/indexSideNav.css"
import NavHeader from './NavHeader'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SideNavHeaderComponent = () => {
  const location=useLocation()
  const navigate=useNavigate()
  useEffect(()=>{ 
    if(location.pathname==="/"){
      navigate("/store")
    }
  },[location.pathname])
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