import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Welcome from './components/welcome';
import Layout from './components/layout';
import Login from './components/logIn';
import Logout from './components/logout';
import Home from './components/home';
import Page404 from './components/Page404';




function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
