import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Description from "./Components/Description";
import Importance from "./Components/Importance";
import Footer from "./Components/Footer";
import "./Styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Description />
      <Importance />
      <Footer />
    </div>
  );
}

export default App;

