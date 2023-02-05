import React from 'react'
// import { Routes, Route } from 'react-router'
import { HashRouter as Router, Route, Routes } from "react-router-dom";



import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './pages/home-page.jsx';
import { AppFooter } from './cmps/app-footer'
// import { UserDetails } from './pages/user-details'

export function RootCmp() {

    return (
        <Router>
            <div className="app main-layout">
                <AppHeader />
                <main className='app-main-container full'>
                    <Routes>
                        <Route element={<HomePage />} path="/" />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
    )
}


