import React from "react";
import { ServiceItems } from "./ServiceItem";
import "./Services.css";
import { Faq } from "./Tsafaq";
import { useState } from "react";

const Services = () => {
  const [faqClicked, setFaqClicked] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const handleFaq = () => {
    if (faqClicked === false) {
      setFaqClicked(true);
    } else if (faqClicked === true) {
      setFaqClicked(false);
    }
  };
  const handleServiceClick = (e) => {
    console.log(e.target);
    if (e.target.id === "retire") {
      setShowFaq(true);
      setShowDescription1(true);
      setShowDescription2(false);
      setShowDescription3(false);
      setShowDescription4(false);
    }
    if (e.target.id === "retire" && showFaq === true) {
      setShowFaq(false);
    }
    if (e.target.id === "retire" && showDescription1 === true) {
      setShowDescription1(false);
    }
    if (e.target.id === "pension") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(true);
      setShowDescription3(false);
      setShowDescription4(false);
    }
    if (e.target.id === "pension" && showDescription2 === true) {
      setShowDescription2(false);
    }
    if (e.target.id === "college") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(false);
      setShowDescription3(true);
      setShowDescription4(false);
    }
    if (e.target.id === "college" && showDescription3 === true) {
      setShowDescription3(false);
    }
    if (e.target.id === "estate") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(false);
      setShowDescription3(false);
      setShowDescription4(true);
    }
    if (e.target.id === "estate" && showDescription4 === true) {
      setShowDescription4(false);
    }
  };
  return (
    <div>
      <h1 id="services-header">Services</h1>
      <div className="cards">
        {ServiceItems.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
              <h4 id={item.id} onClick={(e) => handleServiceClick(e)}>
                {item.title}
              </h4>
              <div className="description-div">
                {showDescription1 ?<h5 className="description"> {item.description1}</h5> : null}
                {showDescription2 ?<h5 className="description"> {item.description2}</h5>: null}
                {showDescription3 ?<h5 className="description"> {item.description3}</h5> : null}
                {showDescription4 ?<h5 className="description"> {item.description4}</h5>: null}
                </div>
                {item.tsafaq ? (
                  <div>
                    <div className="button-div">
                      <button
                        style={{ display: showFaq ? "block" : "none" }}
                        className="faq-button"
                        onClick={handleFaq}
                      >
                        {item.tsafaq}
                      </button>
                      </div>
                    {faqClicked ? (
                        <h5>
                          {Faq.map((item, index) => {
                            return (
                              <div key={index} className="faq">
                                <p>{item.Q}</p>
                                <br></br>
                                <p>{item.A}</p>
                                <br></br>
                              </div>
                            );
                          })}
                        </h5>
                    ) : null}
                  </div>
                ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
