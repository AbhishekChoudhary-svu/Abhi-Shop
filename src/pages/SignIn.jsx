import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook, FaApple, FaAmazon } from 'react-icons/fa';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
   const { googleSignIn,user } = UserAuth();
   const navigate=useNavigate()

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isSigningIn, setIsSigningIn] = useState(false);

   const handleSignIn = async () => {
      setIsSigningIn(true);
      try {
         await googleSignIn();
      } catch (error) {
         console.error("Sign in error:", error);
      } finally {
         setIsSigningIn(false);
      }
   };
   useEffect(()=>{
      if(user != null){
         navigate("/")
      }
   },[user])

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email, "Password:", password);
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
         >
            <div className="flex justify-center h-20">
               <img
                  className='w-full h-full object-contain'
                  src="https://i.postimg.cc/52W7B2SX/download.png"
                  alt="Logo"
               />
            </div>
            <h2 className="text-3xl font-bold text-center   mb-4 text-gray-800">Sign in</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                     Email
                  </label>
                  <input
                     id="email"
                     type="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                     placeholder="Enter your email"
                  />
               </div>
               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                     Password
                  </label>
                  <input
                     id="password"
                     type="password"
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                     placeholder="Enter your password"
                  />
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                     />
                     <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                     </label>
                  </div>
                  <div className="text-sm">
                     <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        Forgot your password?
                     </a>
                  </div>
               </div>
               <div>
                  <motion.button
                     type="submit"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                     {isSigningIn ? (
                        <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                           className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full"
                        />
                     ) : (
                        'Sign in'
                     )}
                  </motion.button>
               </div>
            </form>
            <div className="mt-6">
               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                     <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
               </div>
               <div className="mt-6 grid grid-cols-3 gap-3">
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                     onClick={handleSignIn}
                  >
                     <FaGoogle className="text-red-500" />
                  </motion.button>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                     <FaFacebook className="text-blue-600" />
                  </motion.button>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                     <FaApple className="text-gray-800" />
                  </motion.button>
               </div>
            </div>
            <div className="mt-6">
               <p className="text-center text-sm text-gray-600">
                  New to Amazon?{' '}
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                     Create your Amazon account
                  </a>
               </p>
            </div>
         </motion.div>
      </div>
   );
};

export default SignIn;
