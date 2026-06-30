'use client'
import { api } from '@/lib/api'
import { createContext, useContext, useEffect, useState } from 'react'

let Auth = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log("AuthProvider", { loading, user });
    const hydrateUser = async () => {
        try {
            let res = await api.get("/api/auth/me");
            console.log(res.data.user)
            setUser(res.data.user)
        } catch (err) {
            console.log("Error in hydration", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        hydrateUser()
    }, [])

    return <Auth.Provider value={{ user, loading, hydrateUser }}>
        {children}
    </Auth.Provider>
}

export const useAuth = () => useContext(Auth)