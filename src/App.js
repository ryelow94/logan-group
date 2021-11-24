import React from "react";
import "./App.css";
import About from "./components/About"
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
        <Route exact path="/about-us">
            <About/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
