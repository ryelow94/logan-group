import React, { Component } from "react";
import { ServiceItems } from "./ServiceItem";
import "./Services.css";
import { Link } from "react-router-dom";
import { Faq } from "./Tsafaq";

class Services extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <h1>Services</h1>
        <container className="card">
          {ServiceItems.map((item, index) => {
            return (
              <div className={item.cName}>
                <h4> {item.title}</h4>
                <h5>{item.description}</h5>
                {item.tsafaq ? (
                  <div>
                    <button className="faq-button" onClick={this.handleClick}>{item.tsafaq}</button>
                    {this.state.clicked ? (
                      <div>
                        <h5>
                          {Faq.map((item, index) => {
                            return (
                              <div className="faq">
                                <p>{item.Q}</p>
                                <br></br>
                                <p>{item.A}</p>
                                <br></br>
                              </div>
                            );
                          })}
                        </h5>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </container>
      </div>
    );
  }
}

export default Services;
