import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../images/logo.jpg'

const Navbar = () => {

    const {logOut,user}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.error(error));
    }
    return (

        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/items'>Items</Link></li>


                    </ul>
                </div>
                <div className='flex'>
                    <img src={logo} alt="" className='w-12 h-12' />
                    <Link to='/' className="font-bold text-teal-400 text-xl ml-1 mt-2">TAHMINA'S KITCHEN</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-teal-400 font-bold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/items'>Items</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li onClick={handleLogOut}><Link>Log Out</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>



                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;