import React from 'react';
import Register from "./components/register";
import View from "./components/view";
import Header from "./components/header";
import Home from "./components/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
