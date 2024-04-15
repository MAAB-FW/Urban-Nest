import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth"
import React, { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"
import PropTypes from "prop-types"

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

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

    // update profile
    const updateUserDetails = (name, photoUrl) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
    }

    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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

    const AuthData = { createUser, loginUser, user, setUser, logoutUser, loading, googleLogin, githubLogin, updateUserDetails }
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthInject

AuthInject.propTypes = {
    children: PropTypes.node,
}
