import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import DaoHub from './pages/DaoHub';
import Proposals from './pages/Proposals';
import ProposalDetails from './pages/ProposalDetails';
import Documentation from './pages/Documentation';
import Company from './pages/Company';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// context
import { TokenProvider } from './pages/TokenContext.js';

function App() {
  return (
    <TokenProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dao" element={<DaoHub />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/proposals/:id" element={<ProposalDetails />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </TokenProvider>
  );
}

export default App;
