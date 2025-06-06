import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}` // Added space after Bearer
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate("/login")
            }
        }).catch((error) => {
        
            localStorage.removeItem('token')
            navigate("/login")
        })
    }, [navigate, token])

    return (
        <>
            <div>UserLogout</div>
        </>
    )
}

export default UserLogout