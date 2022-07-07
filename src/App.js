import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";

// import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
