import '../styles/section.css';

const styles ={
  section: {
    background: "orange"
  }
};

function Section() {

    return (
      <section style={styles.section} className="section">
        <h2>Project 1</h2>
        <p>This is a project where I had to create my own website using html and css.</p>
      {/* screenshot of website */}
      </section>
    );
}

export default Section;