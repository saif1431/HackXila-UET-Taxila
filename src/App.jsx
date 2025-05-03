import React from 'react'
import Navbar from './components/Navbar'
import Marque from './components/HomeComponents/Marque'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import OurSponsors from './pages/OurSponsors'
import RegisterUser from './pages/RegisterUser'
import OurModules from './pages/OurModules'
import Ambassadors from './pages/Ambassadors'
function App() {
  return (
 <Router>
  <Navbar  />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/modules' element={<OurModules/>}/>
    <Route path='/sponsors' element={<OurSponsors/>}/>
    <Route path='/registration' element={<RegisterUser/>}/>
    <Route path='/Ambassadors' element={<Ambassadors/>}/>
  </Routes>
  <Footer/>
 </Router>
  )
}

export default App
