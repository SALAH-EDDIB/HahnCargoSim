import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from './../stores/Store';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const {userStore: {user, logout}} = useStore();
    console.log(user);
    
    
return (
    <nav className="navbar main-navbar " >
  
        <ul className="navbar-nav navbar-right d-flex">
            
        
            
                    <li>
                    <img alt="avatar us1" src="/assets/img/avatar/avatar-1.png" width={30} className="rounded-circle mr-1"/>
                    <div className="d-sm-none d-lg-inline-block">{`${user?.userName} `}</div>
               
                    </li>
                    <li>
                    <Link to="#" onClick={logout} className="ml-6 has-icon text-danger">
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </Link>
                    </li>
            
        </ul>
    </nav>
)
}

export default Header