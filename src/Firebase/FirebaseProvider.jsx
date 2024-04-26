import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebaseConfig";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in google provider
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //sign in github 
    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    //logout user
    const logoutUser = () => {
        setUser(null)
        signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false)
               
            }
            
        });
        return () => unSubscribe();
    }, [])

    const allValue = {
        createUser,
        user,
        signInUser,
        gitHubLogin,
        googleLogin,
        logoutUser,
        loading
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