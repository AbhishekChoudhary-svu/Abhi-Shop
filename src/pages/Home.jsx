import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Banner from './Banner'


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <Banner />
      
      <div className="py-12 pb-6 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold text-center mb-8 text-gray-800"
        >
          Welcome to AbhiShop
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl text-center mb-12 text-gray-600"
        >
          Discover amazing products at great prices!
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="bg-gradient-to-l from-blue-400 to bg-purple-400 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 inline-block"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}