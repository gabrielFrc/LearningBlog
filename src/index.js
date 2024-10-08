import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { Languages } from './pages/languages';
import { Technologies } from './pages/technologies';
import { SoftSkills } from './pages/softskills';
import { Learn } from './pages/learn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='LearningBlog'>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/softskills" element={<SoftSkills />} />
        <Route path="/learn" element={<Learn />} />
        {/* outras rotas */}
      </Routes>
    </Router>
  </React.StrictMode>
);
