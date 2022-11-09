import React from 'react';
// import { Link  } from 'react-router-dom';
import { HashLink, HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div>
          <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
        <li><Link to= '/'>Home</Link></li>
        <li tabIndex={0}>
          <HashLink smooth to='#about' className="justify-between">
           About
            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg> */}
          </HashLink>
        </li>
        <li><HashLink to= '#services'>Services</HashLink></li>
      <li><Link to= '/blog'>Blog</Link></li>
      <li><Link to= '/contact'>Contact</Link></li>
      </ul>
    </div>
    <Link> <img src= {logo} alt="" /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-bold">
      <li><Link to= '/'>Home</Link></li>
      <li tabIndex={0}>
        <HashLink to= '#about'>
         About
          {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
        </HashLink>

      </li>
      <li><HashLink to= '#services'>Services</HashLink></li>
      <li><Link to= '/blog'>Blog</Link></li>
      <li><HashLink to= '#contact'>Contact</HashLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
  </div>
</div>
        </div>
    );
};

export default Header;