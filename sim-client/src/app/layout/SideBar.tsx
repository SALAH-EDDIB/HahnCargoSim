import React, { useEffect } from 'react'
import { useLocation , Link } from 'react-router-dom'
import { useStore } from '../stores/Store';



const SideBar = () => {
 



    return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="/">CargoConnect</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="/">CC</a>
          </div>

          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="">
                <Link to="/dashboard" className="nav-link" id="dashboard" ><i className="fas fa-fire"></i> <span>General Dashboard</span></Link>
            </li>
           
    </ul>

        </aside>
      </div>
    )
}

export default SideBar
