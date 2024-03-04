
import './App.css';
import React from 'react';


import Login from './pages/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};


export default App;
