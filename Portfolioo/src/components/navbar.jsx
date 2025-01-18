import "../styles/navbar.css";

const styles = {
   navbar: {
    background: "gray",
    justifyContent: "flex-end",
    display: "flex",
   }, 
};

function Navbar() {

    return (
        <nav className="navbar">
            <a href='/'>Portfolio</a>
        </nav>
    );
}

export default Navbar;