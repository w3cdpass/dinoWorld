import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            {/* Logo/Brand */}
            <div>
              <Link 
                to="/" 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-500"
              >
                <span className="font-bold text-lg">Dino <span className="text-3xl text-blue-500">World</span></span>
              </Link>
            </div>
            
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
              >
                <span>Home</span>
              </Link>
              <Link 
                to="/login" 
                className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
              >
                <span>Login</span>
              </Link>
              <Link 
                to="/register" 
                className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
              >
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex justify-center pb-4">
        <div className="flex space-x-4">
          <Link 
            to="/" 
            className="py-1 px-2 text-gray-700 hover:text-blue-500 text-sm"
          >
            <span>Home</span>
          </Link>
          <Link 
            to="/login" 
            className="py-1 px-2 text-gray-700 hover:text-blue-500 text-sm"
          >
            <span>Login</span>
          </Link>
          <Link 
            to="/register" 
            className="py-1 px-2 text-gray-700 hover:text-blue-500 text-sm"
          >
            <span>Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;