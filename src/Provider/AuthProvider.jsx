import { signInWithEmailAndPassword,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);


    const createUser = (email, password) => {
        console.log(email, password);
     return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
      return  signInWithPopup(auth, GoogleProvider)
    }

    const authInfo = {loginUser, createUser, googleLogin}
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