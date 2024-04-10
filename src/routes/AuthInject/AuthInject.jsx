/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import React, { createContext, useState } from "react"
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

    const AuthData = { createUser, loginUser, user, setUser }
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthInject
