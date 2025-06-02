import {Link} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <Link to="/pages/About" style={{marginRight:'20px', color:'white'}}>About</Link>
      
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Contact</h3>
        <p style={styles.text}>Email: contact@the-sola.org</p>
        <p style={styles.text}>Phone: +1 (832) 709-6951</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Follow Us</h3>
        <div style={styles.socialIcons}>
          <a href="https://twitter.com/THE_SOLA" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            🐦 Twitter
          </a>
          <a href="https://instagram.com/lekan_yahaya" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            📸 Instagram
          </a>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.text}>© {currentYear} THE-SOLA. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0a0a23',
    color: '#ffffff',
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: '1rem',
  },
  section: {
    flex: '1 1 250px',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  icon: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  bottom: {
    width: '100%',
    textAlign: 'center',
    marginTop: '2rem',
    borderTop: '1px solid #ffffff33',
    paddingTop: '1rem',
  },
};

export default Footer;

