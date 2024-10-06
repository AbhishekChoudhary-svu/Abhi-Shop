import { useContext, createContext ,useState,useEffect } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
   const googleSignIn =()=>{
    const provider = new GoogleAuthProvider()
    // signInWithRedirect(auth,provider)
    signInWithPopup(auth,provider)
   }
   const logOut = ()=>{
    signOut(auth)
   }
   
   useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return () => {
        unsubscribe(); // Cleanup subscription on unmount
    };
}, []);

   return <AuthContext.Provider value={{googleSignIn,logOut,user}}>
        {children}
    </AuthContext.Provider>
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}