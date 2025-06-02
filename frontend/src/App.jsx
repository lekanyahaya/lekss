import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <Router>
      <DynamicBackground> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/components/DynamicBackground"/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/pages/About" element={<About />} />
        </Routes>
        <Footer />
      </DynamicBackground>
    </Router>
  );
}

export default App;
