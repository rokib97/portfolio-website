import React from "react";

const Navbar = () => {
  const navbarItems = (
    <>
      <li className="mx-auto lg:mr-4">
        <a href="#home">Home</a>
      </li>
      <li className="mx-auto lg:mr-4">
        <a href="#services">Projects</a>
      </li>
      <li className="mx-auto lg:mr-4">
        <a href="#portfolio">Contact</a>
      </li>
      <li>
        <a
          href="/"
          target="_blank"
          className="btn btn-primary hover:text-white btn-outline text-white"
          rel="noreferrer"
        >
          Resume
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-12 lg:mb-32 h-24 sticky top-0 z-50">
      <div className="navbar-start">
        <a class="text-2xl text-primary font-bold " href="/">
          &lt;Rokibul Hasan Rokib/&gt;
        </a>
      </div>
      <div className="dropdown flex navbar-end">
        <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2  top-12 shadow bg-base-100"
        >
          <li className="mx-auto mb-1">
            <a href="#home">Home</a>
          </li>
          <li className="mx-auto mb-1">
            <a href="#services">Projects</a>
          </li>
          <li className="mx-auto mb-1">
            <a href="#portfolio">Contact</a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="btn btn-outline text-white btn-primary"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold text-xl">
          {navbarItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
