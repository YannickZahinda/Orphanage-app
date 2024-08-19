import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
    return (
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
              {/* Logo */}
              <img src="src/assets/images/mwabana.png" alt="Logo" className="h-20 w-auto" />
              
              {/* Navigation links */}
              <ul className="flex space-x-6">
                <li><Link className="text-gray-800 hover:text-blue-600" to="/">Home</Link></li>
                <li><Link to="/about-us" className="text-gray-800 hover:text-blue-600">About Us</Link></li>
                <li><Link to="/our-work" className="text-gray-800 hover:text-blue-600">Our Work</Link></li>
                <li><Link to="/mwabana-center" className="text-gray-800 hover:text-blue-600">Mwabana Center</Link></li>
                <li><Link to="/our-children" className="text-gray-800 hover:text-blue-600">Our Children</Link></li>
                <li><Link to="/blog" className="text-gray-800 hover:text-blue-600">Blog</Link></li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">
              <FaLinkedinIn />
            </a>
            
            {/* Get Started (Donate) link */}
            <Link to="/donate" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </Link>
          </div>
          </div>
        </nav>
      </header>
    );
  };

export default Header;