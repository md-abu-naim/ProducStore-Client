import { signInWithEmailAndPassword,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
      return  signInWithPopup(auth, GoogleProvider)
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
      })
      return () => unSubscribe()
  }, [auth])

    const authInfo = {loginUser, createUser, googleLogin, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;