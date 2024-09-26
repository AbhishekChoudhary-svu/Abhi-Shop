import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './store/productSlice'
import cartReducer from './store/cartSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import LocomotiveScroll from 'locomotive-scroll';


// Create the Redux store
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
})

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Provider store={store}>
      <Router>
      
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gradient-to-r from-indigo-100 to-purple-100 container mx-auto px-2 sm:px-2 lg:px-2">
            
            <Routes>
              <Route path="/" element={<Home />} />
            
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}