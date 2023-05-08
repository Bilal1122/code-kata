import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// pages
import HomePage from './pages/home'
import ApplicationPage from './pages/Application'

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/application/:id" element={<ApplicationPage />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default Routers;
