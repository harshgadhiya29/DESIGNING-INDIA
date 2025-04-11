import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img
                 src={logo}
                alt="Logo"
                className="h-[300px] w-[300px] object-contain"
              />

            </Link>
          </div>


          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact" isButton={true}>Contact</NavLink>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sm:hidden overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-900 shadow-inner">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
          <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)} isButton={true}>Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ to, children, isButton }) {
  return isButton ? (
    <Link
      to={to}
      className="inline-flex items-center px-4 py-2 rounded-full bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition duration-300 shadow-md"
    >
      {children}
    </Link>
  ) : (
    <Link
      to={to}
      className="inline-flex items-center px-1 py-3 border-b-2 border-transparent text-sm font-medium text-white hover:text-red-400 hover:border-red-600 transition duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children, isButton }) {
  return isButton ? (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 rounded-full bg-red-600 text-white font-medium text-sm text-center hover:bg-red-700 transition duration-300 shadow-md"
    >
      {children}
    </Link>
  ) : (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:text-red-400 hover:bg-gray-800 transition duration-300"
    >
      {children}
    </Link>
  );
}

export default Navbar;