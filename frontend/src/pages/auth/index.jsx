import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { Flex } from '@radix-ui/themes'

const Auth = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path='*' element={<Navigate to="/auth/login" />} />
            </Routes>
        </div>
    )
}

export default Auth