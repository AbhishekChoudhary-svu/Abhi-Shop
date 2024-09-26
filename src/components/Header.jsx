import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <header className="bg-gradient-to-l from-blue-800 to bg-purple-800 text-white">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              AbhiShop
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            </ul>
          </nav>
          <div className="flex items-center ">
            <div className='relative'>
            <Link to="/cart" className="flex items-center hover:text-gray-300">
            <ShoppingCart size={35} strokeWidth={1.5} absoluteStrokeWidth />
              <span className=" absolute text-white top-1  right-1  font-bold  px-2 py-1 text-xs">
                {cartItems.length}
              </span>
            </Link>
            </div>
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><Link to="/" className="block hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="block hover:text-gray-300">Products</Link></li>
            <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}