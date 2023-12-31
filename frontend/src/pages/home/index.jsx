import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AllQuizzes from './all-quizzes'
import QuizDetails from './quiz-details'

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllQuizzes />} />
                <Route path="/:id" element={<QuizDetails />} />
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </div>
    )
}

export default Home