


const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About THE-SOLA</h1>
      <p style={styles.text}>
        THE-SOLA is a volunteer matchmaking platform connecting skilled individuals with nonprofit causes.
        Our mission is to simplify and strengthen the relationship between volunteers and organizations,
        empowering people to give back meaningfully — wherever they are.
      </p>
      <p style={styles.text}>
        Whether you’re a developer, designer, teacher, or project manager — THE-SOLA helps you
        find causes that align with your skills and schedule. Let’s change the world, one match at a time.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'blue',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    color: 'black',
  },
};

export default About;
