import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'
import ExtrasPage from './pages/ExtrasPage'

import projectData from './data/ProjectData'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage projectData={projectData}/>} />
      <Route path='/:project' element={<ProjectsPage projectData={projectData}/>} />
      <Route exact path='/extras' element={<ExtrasPage/>} />
    </Routes>
    <Footer projectData={projectData}/>
    </>
  );
}

export default App;
