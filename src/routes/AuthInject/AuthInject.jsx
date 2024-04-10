/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import React, { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext()

const AuthInject = ({ children }) => {
    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => unSubscribe()
    }, [])

    const AuthData = { createUser, loginUser, user, setUser, logoutUser }
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthInject
