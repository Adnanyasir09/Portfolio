import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-widest hover:text-indigo-400 transition">
              Adnan Yasir
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3 py-2 font-medium text-lg transition-colors hover:text-indigo-400 ${
                  location.pathname === to
                    ? "text-indigo-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-indigo-400"
                    : "text-gray-300"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            >
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-2">
          {links.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md font-semibold text-lg transition-colors hover:bg-indigo-600 hover:text-white ${
                location.pathname === to ? "bg-indigo-600 text-white" : "text-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
