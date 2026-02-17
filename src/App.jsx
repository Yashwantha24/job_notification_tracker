import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Saved from './pages/Saved';
import Digest from './pages/Digest';
import Settings from './pages/Settings';
import Proof from './pages/Proof';
import DesignSystemPage from './pages/DesignSystemPage';
import TestData from './pages/TestData';
import Ship from './pages/Ship';

// Route Guard Component
const RequireTests = ({ children }) => {
  const saved = JSON.parse(localStorage.getItem('jobTrackerTestStatus') || '{}');
  const checkedCount = Object.values(saved).filter(Boolean).length;

  if (checkedCount < 10) {
    return <Navigate to="/jt/07-test" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/design-system" element={<DesignSystemPage />} />

        {/* Verification Routes */}
        <Route path="/jt/07-test" element={<TestData />} />
        <Route path="/jt/08-ship" element={
          <RequireTests>
            <Ship />
          </RequireTests>
        } />
      </Routes>
    </Router>
  );
}

export default App;
