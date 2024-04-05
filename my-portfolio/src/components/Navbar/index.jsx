import React from 'react';
import Logo from '../../assets/logo1.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 font-protest dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://aysegulozenportfolio.netlify.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-12" alt="Portfolio Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">A. Özen</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/About" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
            </li>
            <li>
              <Link to="/Projects" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Projects</Link>
            </li>
            <li>
              <Link to="/Contact" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;