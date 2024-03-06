import { RouteProps } from 'react-router';

import Header from './Header';
import SideBar from './SideBar';



const AdminLayout = ({ children }: RouteProps) => {

    return (
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <Header/>
                <SideBar/>

                    {children}

                
            </div>
    )
}

export default AdminLayout;
