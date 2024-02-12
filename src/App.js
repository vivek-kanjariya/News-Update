import React from "react";
import Link2 from "./comp/Link2";
import Link1 from "./comp/Link1";
import Navbar from "./comp/Navbar";
import "./comp/style/st.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Link1" element={<Link1 />} />
        <Route path="/Link2" element={<Link2 />} />
      </Routes>
    </div>
  );
}

export default App;
