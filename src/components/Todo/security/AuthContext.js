import { createContext, useContext, useState } from "react";

// create context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

 // share context & maintain state
export default function AuthProvider( { children } ) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState('')

    function login(username, password) {
        if (username === 'user' && password === 'pass') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated, username, setUsername, login} }>
            {children}
        </AuthContext.Provider>
    )
}