import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, updateQuantity } from '../store/cartSlice'
import { motion } from 'framer-motion'

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }))
    }
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
      >
        Your Cart
      </motion.h2>
      {cartItems.length === 0 ? (
        <motion.p
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-center text-lg sm:text-xl text-gray-600"
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="max-w-2xl sm:max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="flex flex-col sm:flex-row items-center justify-between border-b p-4 sm:p-6"
            >
              <div className="flex items-center flex-col sm:flex-row">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-16 sm:w-20 h-16 sm:h-20 object-cover mr-0 sm:mr-6 mb-4 sm:mb-0 rounded-lg"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row mt-4 sm:mt-0">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border-gray-300 rounded-lg border mr-0 sm:mr-4 mb-4 sm:mb-0"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-100 bg-red-600 py-1 px-3 rounded-lg font-bold  hover:text-red-800 transition-colors duration-200"
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
          <div className="p-4 sm:p-6">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Total: ${total.toFixed(2)}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/checkout"
                className="bg-gradient-to-l from-blue-400 to bg-purple-400 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg inline-block transition-colors duration-300 text-center w-full sm:w-auto"
              >
                Proceed to Checkout
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
