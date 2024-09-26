import { Link } from 'react-router-dom'
export default function Footer() {
    return (
      <footer className="bg-gradient-to-l from-blue-800 to bg-purple-800 text-white  py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 ABhiShop. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }