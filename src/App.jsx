import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Saved from './pages/Saved';
import Digest from './pages/Digest';
import Settings from './pages/Settings';
import Proof from './pages/Proof';
import DesignSystemPage from './pages/DesignSystemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
