import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import ProfilePage from './components/ProfilePage';
import Feedpage from './components/FeedPage.js';
import GetInTouch from './components/GetInTouch'; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/feed" element={<Feedpage/>} />
        <Route path="/get-in-touch" element={<GetInTouch />} /> 
      </Routes>
    </Router>
  );
}

export default App;
