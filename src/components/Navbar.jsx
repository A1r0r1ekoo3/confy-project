import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  return (
    <div className={`bg-[#DDF2FD] dark:bg-black`}>
      <div className="navbar  max-container">
        <div className="navbar-start">
          <div className="hidden lg:block">
            <Link
              to="/"
              className="text-3xl btn flex items-center btn-secondry active border-none bg-[#ED5AB3] dark:text-white"
            >
              C
            </Link>
          </div>
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 dark:svg-color"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-black "
            >
              <li>
                <Link
                  className=" dark:text-white  dark:hover:bg-[#222831]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" dark:text-white  dark:hover:bg-[#222831] "
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className=" dark:text-white  dark:hover:bg-[#222831]"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className=" dark:text-white  dark:hover:bg-[#222831]"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  className=" dark:text-white  dark:hover:bg-[#222831]"
                  to="/checkout"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:block ">
          <Link
            to="/"
            className="btn btn-ghost font-normal text-base dark:text-white  dark:hover:bg-[#222831]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost font-normal  text-base capitalize  dark:text-white  dark:hover:bg-[#222831]"
          >
            About
          </Link>
          <Link
            to="/products"
            className="btn btn-ghost font-normal text-base dark:text-white  dark:hover:bg-[#222831]"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="btn btn-ghost font-normal text-base dark:text-white  dark:hover:bg-[#222831]"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="btn btn-ghost font-normal text-base dark:text-white  dark:hover:bg-[#222831]"
          >
            Checkout
          </Link>
        </div>
        <div className="navbar-end">
          <label  className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            <svg
              className="swap-on fill-current dark:svg-color w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button className="btn btn-ghost btn-circle">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:svg-color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-[#0174BE] text-white  dark:bg-[#ED5AB3] dark:text-black border-none">
                  8
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
