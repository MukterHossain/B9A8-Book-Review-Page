import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Layout = () => {
    return (
        <div>
            <div className="mt-10 mx-20">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;