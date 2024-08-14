import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <ul className="flex space-x-4">
                    <li><Link className="text-gray-800 hover:text-blue-600" to="/">Home</Link></li>
                    <li><Link to="/about-us" className="text-gray-800 hover:text-blue-600">About Us</Link></li>
                    <li><Link to="/our-work" className="text-gray-800 hover:text-blue-600" >Our Work</Link></li>
                    <li><Link to="/mwabana-center" className="text-gray-800 hover:text-blue-600">Mwabana Center</Link></li>
                    <li><Link to="/our-children" className="text-gray-800 hover:text-blue-600">Our Children</Link></li>
                    <li><Link to="/blog" className="text-gray-800 hover:text-blue-600">Our work</Link></li>
                    <li><Link to="/donate" className="text-gray-800 hover:text-blue-600"></Link>Donate</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;