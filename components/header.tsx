"use client";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full h-[10rem] z-50 py-4 px-8 bg-neutral-900 flex justify-between items-center">
        <nav className="hidden lg:flex lg:justify-around lg:items-center w-full font-poppins">
          <Link 
            href="/"
            data-track="navigation"
            data-track-category="menu"
            data-track-label="logo_desktop"
          >
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent hover:text-[#FFA7B5] transition-colors duration-300 relative inline-block pb-4">
              Gustavo Ferreira
              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-1"></div>
            </h1>
          </Link>
          <ul className="flex font-semibold gap-20 xl:gap-25 text-base xl:text-xl justify-items-end">
            <li>
              <Link 
                className="text-[#FFFFFF] hover:text-[#FFFFFF] relative group" 
                href="/"
                data-track="navigation" 
                data-track-category="menu"
                data-track-label="home"
              >
                Home
                <span className="absolute rounded-full bottom-[-1px] left-0 w-0 h-[0.2rem] bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                className="text-[#FFFFFF] hover:text-[#FFFFFF] relative group" 
                href="#About"
                data-track="navigation" 
                data-track-category="menu"
                data-track-label="about_me"
              >
                About Me
                <span className="absolute rounded-full bottom-[-1px] left-0 w-0 h-[0.2rem] bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                className="text-[#FFFFFF] hover:text-[#FFFFFF] relative group" 
                href="#projects"
                data-track="navigation"
                data-track-category="menu"
                data-track-label="projects"
              >
                Projects
                <span className="absolute rounded-full bottom-[-1px] left-0 w-0 h-[0.2rem] bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                className="text-[#FFFFFF] hover:text-[#FFFFFF] relative group" 
                href="#Contact"
                data-track="navigation"
                data-track-category="menu"
                data-track-label="contact"
              >
                Contact
                <span className="absolute rounded-full bottom-[-1px] left-0 w-0 h-[0.2rem] bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logo Mobile */}
        <Link 
          href="/"
          data-track="navigation"
          data-track-category="menu"
          data-track-label="logo_mobile"
        >
          <h1 className="text-6xl lg:hidden font-black bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent hover:text-[#FFA7B5] transition-colors duration-300 relative pb-4">
            GUIS
          </h1>
        </Link>

        {/* Botão do Menu Hamburguer */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          data-track="click"
          data-track-category="menu"
          data-track-label="menu_hamburguer_abrir"
        >
          <svg className="w-9 h-9 text-[#FF3B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Sidebar Mobile */}
        <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#2E2E2E] text-[#D3D3D3] transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <button 
            onClick={toggleSidebar} 
            className="p-4 focus:outline-none" 
            aria-label="Close menu"
            data-track="click"
            data-track-category="menu"
            data-track-label="menu_hamburguer_fechar"
          >
            <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <nav className="mt-16">
            <ul>
              <li className="p-4 hover:bg-[#FF3B5C] hover:text-white">
                <Link 
                  href="/"
                  data-track="navigation"
                  data-track-category="menu_mobile"
                  data-track-label="home"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li className="p-4 hover:bg-[#FF3B5C] hover:text-white">
                <Link 
                  href="#About"
                  data-track="navigation"
                  data-track-category="menu_mobile"
                  data-track-label="about_me"
                  onClick={toggleSidebar}
                >
                  About Me
                </Link>
              </li>
              <li className="p-4 hover:bg-[#FF3B5C] hover:text-white">
                <Link 
                  href="#Projects"
                  data-track="navigation"
                  data-track-category="menu_mobile"
                  data-track-label="projects"
                  onClick={toggleSidebar}
                >
                  Projects
                </Link>
              </li>
              <li className="p-4 hover:bg-[#FF3B5C] hover:text-white">
                <Link 
                  href="#Contact"
                  data-track="navigation"
                  data-track-category="menu_mobile"
                  data-track-label="contact"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={toggleSidebar}
            data-track="click"
            data-track-category="menu"
            data-track-label="overlay_fechar_menu"
          />
        )}
      </header>
    </>
  );
};

export default Header;