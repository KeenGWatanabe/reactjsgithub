import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './Navbar';


function App() {
  return (
    // // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./About" element={<About />} />
        <Route path="./Careers" element={<Careers />} />
      </Routes>
    </Navbar>

  );
}

export default App;