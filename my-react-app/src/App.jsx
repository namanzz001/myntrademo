import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectStore from './components/selectstore'
import SelectAesthetic from './components/selectesthetic'
import Home from './components/homepage/home/home'
import Quiz from './components/quiz/quiz';
import ProductPage from './components/minimalist/ProductPage';

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectStore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/selectaesthetic" element={<SelectAesthetic />} />
        <Route path="/home/selectaesthetic/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App
