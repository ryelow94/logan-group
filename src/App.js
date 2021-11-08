import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
      <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
