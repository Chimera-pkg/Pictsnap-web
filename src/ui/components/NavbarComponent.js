import React, { useContext, useState } from "react";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "src/context/UserContext";
import Logo from "src/assets/images/pictsnap.png";
import { SidebarContext } from "src/context/SidebarContext";

export function NavbarAdminComponent() {
  const { user, setUser } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <div className="fixed z-40 lg:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ffillrule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link
          to="/"
          className="flex items-center text-2xl font-semibold text-gray-900"
        >
          <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
          <h2 className="text-sm">
            PictSnap <span className="text-[#FB8500]">Builder</span>
          </h2>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <Link to={"/"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NavbarLanding() {
  const { sidebar, setSidebar } = useContext(SidebarContext);
  return (
    <nav className="bg-white border-gray-200 px-6 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed z-50 w-full shadow-md shadow-gray-100">
      <div className="container flex flex-wrap justify-between mx-auto items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Nares Logo" />
          <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <h2 className="">
              Nares <span className="text-indigo-600">Certificate</span>
            </h2>
          </div>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#panduan"
                className="block mt-1.5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Panduan
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block mt-1.5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tim Kami
              </a>
            </li>

            <li>
              <a
                href="#kontak"
                className="block mt-1.5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Kontak
              </a>
            </li>
            <li>
              <button
                onClick={(e) => (window.location.href = "/login")}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Masuk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
