import '../styles/footer.css';

const styles ={
    section: {
      background: "yellow"
    }
  };
  

function Footer() {

    return (
        <footer style={styles.footer} className="footer">
        <h2>Contact Me</h2>
        <p>Github</p>
      </footer>
    );
}

export default Footer;