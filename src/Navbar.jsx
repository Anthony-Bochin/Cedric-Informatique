import React, { useState } from 'react';
import Logo from '../src/assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le défilement fluide
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mt-20 mb-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-24 w-auto" alt="Flowbite Logo" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="transition-transform duration-450 hover:scale-110 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a href="mailto:cedricinfo17@gmail.com">Me contacter</a>
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)} // Toggle menu
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-white">
            <li>
              <a
                href="#accueil"
                onClick={(e) => handleScroll(e, 'accueil')}
                className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                aria-current="page"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#Depannage"
                onClick={(e) => handleScroll(e, 'Depannage')}
                className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Dépannage
              </a>
            </li>
            <li>
              <a
                href="#Formation"
                onClick={(e) => handleScroll(e, 'Formation')}
                className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Formation
              </a>
            </li>
            <li>
              <a
                href="#Maintenance"
                onClick={(e) => handleScroll(e, 'Maintenance')}
                className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Maintenance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
