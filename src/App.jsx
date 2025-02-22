import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/components/home/Home';
import PortfolioIntro from './components/loader/Loader';
import CursorComponent from './components/cursor/CursorComponent';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Show the loader when `loading` is true
        <PortfolioIntro />
      ) 
      : (
        // Show the main content when `loading` is false
        <>
        
        <Header />
        <CursorComponent/>
        
        <Home/>
        </>
      )}
     
    </>
  );
}
export default App;
