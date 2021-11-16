import React from "react";
import { ServiceItems } from "./ServiceItem";
import "./Services.css";
import { Faq } from "./Tsafaq";
import { useState } from "react";

const Services = () => {
  const [faqClicked, setFaqClicked] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showDescripion1, setShowDescripion1] = useState(false);
  const [showDescripion2, setShowDescripion2] = useState(false);
  const [showDescripion3, setShowDescripion3] = useState(false);
  const [showDescripion4, setShowDescripion4] = useState(false);
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
      setShowDescripion1(true);
    }
    if (e.target.id === "retire" && showFaq === true) {
      setShowFaq(false);
    }
    if (e.target.id === "retire" && showDescripion1 === true) {
      setShowDescripion1(false);
    }
    if (e.target.id === "pension") {
      setShowDescripion2(true);
    }
    if (e.target.id === "pension" && showDescripion2 === true) {
      setShowDescripion2(false);
    }
    if (e.target.id === "college") {
      setShowDescripion3(true);
    }
    if (e.target.id === "college" && showDescripion3 === true) {
      setShowDescripion3(false);
    }
    if (e.target.id === "estate") {
      setShowDescripion4(true);
    }
    if (e.target.id === "estate" && showDescripion4 === true) {
      setShowDescripion4(false);
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
                {showDescripion1 ?<h5 className="descripion"> {item.description1}</h5> : null}
                {showDescripion2 ?<h5 className="descripion"> {item.description2}</h5>: null}
                {showDescripion3 ?<h5 className="descripion"> {item.description3}</h5> : null}
                {showDescripion4 ?<h5 className="descripion"> {item.description4}</h5>: null}
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
