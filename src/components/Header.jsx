import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'
import SignIn from '../pages/SignIn'
import { UserAuth } from '../context/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)
  const {user,logOut}= UserAuth()
  const handleLogout= async ()=>{
    try {
      await logOut()
    } catch (error) {
      
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-blue-800 to bg-purple-800 text-white">
      <div className="container border-purple-900 border-b-[1px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className=" font-bold">
             <img className='h-24 font-bold' src="https://i.postimg.cc/Kz0wQhvd/logo-removebg-preview.png" alt="" />
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
            <div  className='p-5 text-center cursor-pointer text-sm hidden md:block'>
            {user?.displayName ?(<p className='font-bold text-sm'>Hello, {user?.displayName} </p>):<p className='font-bold text-sm'>Hello, User </p>}
              {user?.displayName ? (
                <button onClick={handleLogout} >Logout</button>
              ):<Link to="/signIn">
              <h2 className=' font-semibold ' >Sign In</h2>
           </Link>}
              
           
            </div>
          
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
          <div className="px-4 cursor-pointer hover:text-gray-300 font-bold pt-2 pb-1 space-y-1 sm:px-3 ">
            <p>Login</p>
          </div>
          <ul className="px-4 font-bold pt-2 pb-1 space-y-1 sm:px-3">
            <li><Link to="/" className="block cursor-pointer hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="block cursor-pointer hover:text-gray-300">Products</Link></li>
            <li><Link to="/contact-us" className="cursor-pointer hover:text-gray-300">Contact Us</Link></li>
          </ul>
          
        </div>
      )}
    </header>
  )
}