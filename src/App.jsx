import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import DashboardPage from './pages/DashboardPage';
import Channel1Page from './pages/Channel1Page';
import Channel2Page from './pages/Channel2Page';
import Channel3Page from './pages/Channel3Page';
import DownloadButton from './components/DownlodeData'; 

function AppContent() {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-400 text-white fixed top-0 w-full z-50 shadow-md">
        <div className="flex items-center gap-4">
          <img src="/image-removebg-preview.png" alt="Logo" className="h-12 w-12"/>
          <h1 className="text-xl md:text-3xl font-bold">Chemistry Lab Air Quality</h1>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          <Link to="/" className="font-semibold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">All Channels</Link>
          <Link to="/channel1" className="font-semibold transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">Channel 1</Link>
          <Link to="/channel2" className="font-semibold transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">Channel 2</Link>
          <Link to="/channel3" className="font-semibold transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">Channel 3</Link>
        </nav>
      </div>

      <div className="pt-32 px-4 bg-gray-50 min-h-screen">
        {location.pathname === '/' && <DownloadButton />}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/channel1" element={<Channel1Page />} />
          <Route path="/channel2" element={<Channel2Page />} />
          <Route path="/channel3" element={<Channel3Page />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
