import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
  HomePage, 
  WhatNext,
  CountriesProviderRepresentative,
  VairifyWorldwideForum,
  MyRevenueportal
} from './Pages/index.js'
import { Navbar } from './Components/index.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/whatNext" element={<WhatNext />} />
          <Route exact path="/CountriesProviderRepresentative" element={<CountriesProviderRepresentative />} />
          <Route exact path="/VairifyWorldwideForum" element={<VairifyWorldwideForum />} />
          <Route exact path="/MyRevenueportal" element={<MyRevenueportal />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
