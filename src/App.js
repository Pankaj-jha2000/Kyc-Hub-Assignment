import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/styles/global.css';

const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const CompareProducts = lazy(() => import('./pages/CompareProducts'));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Sidebar />
        <div className="main-content" style={{ marginLeft: '220px', marginTop: '60px', padding: '20px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/compare" element={<CompareProducts />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
