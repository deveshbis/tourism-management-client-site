import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebaseConfig";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in google provider
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //sign in github 
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               
            }
            
        });
        return () => unSubscribe();
    }, [])

    const allValue = {
        createUser,
        user,
        signInUser,
        gitHubLogin,
        googleLogin
    };

    return (
        <AuthContext.Provider value={allValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FirebaseProvider;