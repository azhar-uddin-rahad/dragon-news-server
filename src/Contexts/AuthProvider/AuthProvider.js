import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext =createContext();

const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState();
    const [loading,setLoading]= useState(true);
    
    const providerLogin =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const LogOut = ()=>{
        setLoading(true);
       return signOut(auth);
    }
    const createUser=(email,password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const SignIn=(email,password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth,email,password)

    }
    const verifyEmail =()=> {
        return sendEmailVerification(auth.currentUser);
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside state change',currentUser);
           if(currentUser===null || currentUser.emailVerified){
            setUser(currentUser);
           }
            setLoading(false);

        }) ;
        return ()=>{
            unSubscribe();

        } 

    },[])
    const authInfo={user,setLoading,verifyEmail,providerLogin,LogOut,createUser,SignIn,loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;