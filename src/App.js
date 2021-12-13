import React from "react";
import "./App.css";
import Home from "./components/Home.js"
import About from "./components/About/About.js"
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.js"
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path ="/logan-group">
            <Home/>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
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
