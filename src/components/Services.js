import React from "react";
import { ServiceItems } from "./ServiceItem";
import "./Services.css";
import { Faq } from "./Tsafaq";
import { useState} from "react"

const Services = () => {
  const [faqClicked, setFaqClicked]= useState(false)
  const [showFaq, setShowFaq]= useState(false)
  const handleClick = () => {
    if(faqClicked===false){
      setFaqClicked(true)
    } else if(faqClicked===true){
      setFaqClicked(false)
    }
  };
  const handleServiceClick = (e) => {
    console.log(e.target.id)
    if(e.target.id === "retire"){
      setShowFaq(true)
    } 
    if(e.target.id === "retire" && showFaq===true){
      setShowFaq(false)
    }

  }
    return (
      <div>
        <h1 id="services-header">Services</h1>
        <div className="card">
          {ServiceItems.map((item, index, id) => {
            return (
              <div key={index} className={item.cName}>
                <h4 id={item.id} onClick={(e)=> handleServiceClick(e)}> {item.title}</h4>
                <h5>{item.description}</h5>
                {item.tsafaq ? (
                  <div>
                    <button style={{display:showFaq?"block": "none"}} className="faq-button" onClick={handleClick}>{item.tsafaq}</button>
                    {faqClicked ? (
                      <div>
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
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services;
