// Import library yang diperlukan dari React dan React Router DOM
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import komponen dan halaman yang dibutuhkan dalam aplikasi
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreatmentRecommendation from './pages/TreatmentRecommendation';
import AdminDashboard from './pages/AdminDashboard';
import TreatmentList from './pages/TreatmentList';
import Article from './pages/Articles';
import LoginPage from './pages/Login';
import DetailArticlePage from './pages/DetailArticle';

export default function App() {
 
    // State untuk menyimpan status login pengguna
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

     // Fungsi untuk menangani login pengguna
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
  return (
    // Render komponen aplikasi di dalam Router dengan rute-rute yang sesuai
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-treatment" element={<TreatmentList />} />
          <Route path="/recommendation-treatment" element={<TreatmentRecommendation />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/admin-dashboard" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/detailarticle/:id" element={<DetailArticlePage/>} />
          <Route path="/article" element={<Article />} />
        </Routes>
      <Footer />
    </Router>
  );
}

// Render komponen App di dalam root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
