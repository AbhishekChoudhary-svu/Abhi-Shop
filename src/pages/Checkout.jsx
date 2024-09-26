import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/cartSlice'
import { motion } from 'framer-motion'

export default function Checkout() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', { items: cartItems, customer: formData })
    dispatch(clearCart())
    alert('Thank you for your order!')
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Checkout
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* ... (form fields remain the same) ... */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h3>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between mb-2"
              >
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </motion.div>
            ))}
            <div className="text-xl font-bold mt-4 text-gray-800">Total: ${total.toFixed(2)}</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-l from-blue-400 to bg-purple-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Place Order
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}