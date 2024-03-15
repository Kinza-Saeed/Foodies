import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  
  );
}

export default App;
