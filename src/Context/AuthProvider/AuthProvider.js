import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const userCreate=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const logOut=()=>{
        localStorage.removeItem('token')
       return signOut(auth);
       
         
    }

    const loginWithProvider=(Provider)=>{
        setLoading(true);
        return signInWithPopup(auth,Provider);
        
        
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return unsubscribe;
    },[])

    const authInfo={
        user,
        loading,
        userCreate,
        loginUser,
        logOut,
        loginWithProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;