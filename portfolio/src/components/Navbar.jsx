import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-around">
    <Link to="/" className="hover:text-gray-300">Home</Link>
    <Link to="/about" className="hover:text-gray-300">About</Link>
    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
  </nav>
);

export default Navbar;
