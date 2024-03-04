import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
