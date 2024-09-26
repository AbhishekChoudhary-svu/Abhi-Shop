import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Contact us Form</h1>
      <div className="text-center">
        <p className="text-xl mb-8">We are avaiable to help You</p>
        <Link
          to="/contact-us"
          className="bg-gradient-to-l from-blue-400 to bg-purple-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}