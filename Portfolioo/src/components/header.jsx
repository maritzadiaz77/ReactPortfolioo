import "./styles/header.css";

const styles = {
  header: {
    background: "aqua",
  },
  heading: {
    fontSize: "100px",
  },
};

function Header() {
  //all code goes here before starting html down here..
  return (
    <header style={styles.header} className="header">
      <h1 style={styles.heading}>Maritza Diaz</h1>
    </header>
  );
}
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

export default Header;
