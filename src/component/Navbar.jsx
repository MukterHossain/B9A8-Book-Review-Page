import { NavLink } from "react-router-dom";
import '../App.css'


const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[18px] text-[#131313] font-work">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/listed' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink>
                        <NavLink to='/reading' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Pages to Read</NavLink>
                        <NavLink to='/ebook' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>E-Book</NavLink>
                        <NavLink to='/fair' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Book Fair</NavLink>
                    </ul>
                </div>
                <a className="text-3xl text-[#131313] font-work font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center flex-none gap-8 hidden lg:flex">
                <ul className="menu menu-horizontal space-x-5 text-[18px] text-[#131313] font-work px-1">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Home</NavLink>
                    <NavLink to='/listed' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink>
                    <NavLink to='/reading' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Pages to Read</NavLink>
                    <NavLink to='/ebook' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>E-Book</NavLink>
                    <NavLink to='/fair' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Book Fair</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-2 bg-[#23be0a] text-white font-work text-[18px]">Sign In</a>
                <a className="btn bg-[#59c6d2] text-white font-work text-[18px]">Sign Up</a>
            </div>
        </div>







    );
};

export default Navbar;