import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#6200ea', color: 'white' }}>
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '10px', color: 'white' }}>Login</Link>
      <Link to="/register" style={{ color: 'white' }}>Register</Link>
    </nav>
  );
}