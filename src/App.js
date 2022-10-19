import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routes from "./Routes";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
               
        <Routes />

        <Footer />
      </div>
    </Router>
  );
}

