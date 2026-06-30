'use client'

import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
    let router = useRouter()
    let { user, loading } = useAuth()
    console.log("ProtectedRoute", { loading, user });

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, user, router]);

    if (loading) return <h1>Loading...</h1>

    if (!user) return null

    return children;
}

export default ProtectedRoute