import React, { createContext } from "react"

export const AuthContext = createContext()

const AuthInject = ({ children }) => {


    const AuthData={name: "okey"}
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthInject
