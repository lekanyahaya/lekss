import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '30px', backgroundColor: 'green', color: 'red' }}>
      <Link to="/" style={{ marginRight: '20px', color: 'red' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '20px', color: 'white' }}>Login</Link>
      <Link to="/register" style={{ color: 'white', borderRadius: '20px'}}>Register</Link>
      <Link to="/about" style={{margineRight: '20px', color: 'white'}}></Link>
    </nav>
  );
}
