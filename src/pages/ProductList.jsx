import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/productSlice'
import { motion } from 'framer-motion'
import { FaStar } from "react-icons/fa";

export default function ProductList() {
  const Max_Rat = 5
  const Min_Rat = 1
  
  const dispatch = useDispatch()
  const { products, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div className="text-center py-12">Loading...</div>
  }

  if (status === 'failed') {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-5xl font-bold text-center mb-12 text-gray-800"
      >
        Our Products
      </motion.h2>
      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(0,8).map((product) => {
          const rating = Math.floor(Math.random() * (Max_Rat - Min_Rat + 1)) + Min_Rat
          const hasOffer = (Math.random() < 0.5)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.images} alt={product.title} className="w-full h-64 object-contain" />
              <div className="p-6">
                <h3  className="text-xl h-12 font-semibold mb-2 text-gray-800">{product.title}</h3>
                <div className='flex gap-1 p-1'>
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <div className='flex gap-4 items-center font-bold '>
                <p className="text-black mb-2">${product.price.toFixed(2)}</p>
                {hasOffer && <div className='flex gap-2'>
                  <img height={50} width={50} src="https://www.creativefabrica.com/wp-content/uploads/2019/12/10/40-off-icon-Graphics-1-1-580x386.jpg" alt="" />
                  <p>Limited Offer Deal !!</p>
                  </div>}
                </div>

                <motion.div className='mt-1' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-l from-blue-400 to bg-purple-400 mt-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full block text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
        <div className='md:col-span-full'>
        <img  className=' w-full  object-cover' src="https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg" alt="" />
        </div>
        <div className='md:col-span-2'>
        {products.slice(8,9).map((product) => {
          const rating = Math.floor(Math.random() * (Max_Rat - Min_Rat + 1)) + Min_Rat
          const hasOffer = (Math.random() < 0.5)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.images} alt={product.title} className="w-full h-64 object-contain" />
              <div className="p-6">
                <h3  className="text-xl h-12 font-semibold mb-2 text-gray-800">{product.title}</h3>
                <div className='flex gap-1 p-1'>
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <div className='flex gap-4 items-center font-bold '>
                <p className="text-black mb-2">${product.price.toFixed(2)}</p>
                {hasOffer && <div className='flex gap-2'>
                  <img height={50} width={50} src="https://www.creativefabrica.com/wp-content/uploads/2019/12/10/40-off-icon-Graphics-1-1-580x386.jpg" alt="" />
                  <p>Limited Offer Deal !!</p>
                  </div>}
                </div>

                <motion.div className='mt-1' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-l from-blue-400 to bg-purple-400 mt-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full block text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
        </div>
        {products.slice(9,33).map((product) => {
          const rating = Math.floor(Math.random() * (Max_Rat - Min_Rat + 1)) + Min_Rat
          const hasOffer = (Math.random() < 0.5)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.images} alt={product.title} className="w-full blend-multiply h-64 object-contain" />
              <div className="p-6">
                <h3  className="text-xl h-12 font-semibold mb-2 text-gray-800">{product.title}</h3>
                <div className='flex gap-1 p-1'>
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <div className='flex gap-4 items-center font-bold '>
                <p className="text-black mb-2">${product.price.toFixed(2)}</p>
                {hasOffer && <div className='flex gap-2'>
                  <img height={50} width={50} src="https://www.creativefabrica.com/wp-content/uploads/2019/12/10/40-off-icon-Graphics-1-1-580x386.jpg" alt="" />
                  <p>Limited Offer Deal !!</p>
                  </div>}
                </div>

                <motion.div className='mt-1' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-l from-blue-400 to bg-purple-400 mt-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full block text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
        <div className='md:col-span-full'>
        <img  className=' w-full  object-cover' src="https://3.bp.blogspot.com/-3mvWOjVco-k/W7EOgwHcLdI/AAAAAAAAFus/O5Z03Pb-4x083BSYWl59BQ_wl2_XtYa7QCK4BGAYYCw/s1600/Gaurav%2BSingh%2BPost%2B26.png" alt="" />
        </div>
        <div className='md:col-span-2'>
        {products.slice(34,35).map((product) => {
          const rating = Math.floor(Math.random() * (Max_Rat - Min_Rat + 1)) + Min_Rat
          const hasOffer = (Math.random() < 0.5)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.images} alt={product.title} className="w-full h-64 object-contain" />
              <div className="p-6">
                <h3  className="text-xl h-12 font-semibold mb-2 text-gray-800">{product.title}</h3>
                <div className='flex gap-1 p-1'>
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <div className='flex gap-4 items-center font-bold '>
                <p className="text-black mb-2">${product.price.toFixed(2)}</p>
                {hasOffer && <div className='flex gap-2'>
                  <img height={50} width={50} src="https://www.creativefabrica.com/wp-content/uploads/2019/12/10/40-off-icon-Graphics-1-1-580x386.jpg" alt="" />
                  <p>Limited Offer Deal !!</p>
                  </div>}
                </div>

                <motion.div className='mt-1' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-l from-blue-400 to bg-purple-400 mt-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full block text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
        </div>      
        {products.slice(35,products.length).map((product) => {
          const rating = Math.floor(Math.random() * (Max_Rat - Min_Rat + 1)) + Min_Rat
          const hasOffer = (Math.random() < 0.5)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.images} alt={product.title} className="w-full blend-multiply h-64 object-contain" />
              <div className="p-6">
                <h3  className="text-xl h-12 font-semibold mb-2 text-gray-800">{product.title}</h3>
                <div className='flex gap-1 p-1'>
                  {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <div className='flex gap-4 items-center font-bold '>
                <p className="text-black mb-2">${product.price.toFixed(2)}</p>
                {hasOffer && <div className='flex gap-2'>
                  <img height={50} width={50} src="https://www.creativefabrica.com/wp-content/uploads/2019/12/10/40-off-icon-Graphics-1-1-580x386.jpg" alt="" />
                  <p>Limited Offer Deal !!</p>
                  </div>}
                </div>

                <motion.div className='mt-1' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-l from-blue-400 to bg-purple-400 mt-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full block text-center transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
