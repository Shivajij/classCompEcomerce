import './App.css';
import { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Pages/Navbar';
import Home from './componets/Home';
import Cartdata from './componets/Cartdata';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar /> {/* Render Navbar inside the Router */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cartdata />} />
          </Routes>
      </div>
    );
  }
}

export default App;
