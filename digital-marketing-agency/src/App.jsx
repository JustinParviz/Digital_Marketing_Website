import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import PortfolioPreview from './components/PortfolioPreview'

function App() {

  return (
    <>
      <div>
        <HeroSection />
        <PortfolioPreview />
      </div>
    </>
  );
}

export default App
