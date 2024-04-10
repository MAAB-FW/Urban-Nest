/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import React, { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthInject = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout user
    const logoutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => unSubscribe()
    }, [])

    const AuthData = { createUser, loginUser, user, setUser, logoutUser, loading, googleLogin }
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthInject
