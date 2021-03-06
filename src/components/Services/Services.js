import React from "react";
import { ServiceItems } from "./ServiceItem";
import "./Services.css";
import { Faq } from "./Tsafaq";
import { compServ } from "./compServ";
import { useState } from "react";

const Services = () => {
  const [faqClicked, setFaqClicked] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showDesTitle1, setShowDesTitle1] = useState(true);
  const [showDesTitle2, setShowDesTitle2] = useState(true);
  const [showDesTitle3, setShowDesTitle3] = useState(true);
  const [showDesTitle4, setShowDesTitle4] = useState(true);
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [back, isBack] = useState(false);
  const [removeInfo, setRemoveInfo] = useState(false);
  const handleFaq = () => {
    if (faqClicked === false) {
      setFaqClicked(true);
    } else if (faqClicked === true) {
      setFaqClicked(false);
    }
  };
  const handleClose = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
    });
    setRemoveInfo(false);
    setShowDesTitle1(true);
    setShowDesTitle2(true);
    setShowDesTitle3(true);
    setShowDesTitle4(true);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
    isBack(false);
    if (showFaq === true) {
      setFaqClicked(false);
      setShowFaq(false);
    }
  };
  const handleServiceClick = (e) => {
    console.log(e.target);
    if (removeInfo === true) {
      setRemoveInfo(false);
    }
    if (removeInfo === false) {
      setRemoveInfo(true);
    }
    isBack(true);
    if (e.target.id === "retire") {
      setShowFaq(true);
      setShowDescription1(true);
      setShowDescription2(false);
      setShowDescription3(false);
      setShowDescription4(false);
      setShowDesTitle2(false);
      setShowDesTitle3(false);
      setShowDesTitle4(false);
    }
    if (e.target.id === "retire" && showFaq === true) {
      setShowFaq(false);
    }
    if (e.target.id === "retire" && showDescription1 === true) {
      setShowDescription1(false);
      setShowDesTitle2(true);
      setShowDesTitle3(true);
      setShowDesTitle4(true);
      isBack(false);
    }
    if (e.target.id === "pension") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(true);
      setShowDescription3(false);
      setShowDescription4(false);
      setShowDesTitle1(false);
      setShowDesTitle3(false);
      setShowDesTitle4(false);
    }
    if (e.target.id === "pension" && showDescription2 === true) {
      setShowDescription2(false);
      setShowDesTitle1(true);
      setShowDesTitle3(true);
      setShowDesTitle4(true);
      isBack(false);
    }
    if (e.target.id === "college") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(false);
      setShowDescription3(true);
      setShowDescription4(false);
      setShowDesTitle1(false);
      setShowDesTitle2(false);
      setShowDesTitle4(false);
    }
    if (e.target.id === "college" && showDescription3 === true) {
      setShowDescription3(false);
      setShowDesTitle1(true);
      setShowDesTitle2(true);
      setShowDesTitle4(true);
      isBack(false);
    }
    if (e.target.id === "estate") {
      setShowFaq(false);
      setShowDescription1(false);
      setShowDescription2(false);
      setShowDescription3(false);
      setShowDescription4(true);
      setShowDesTitle1(false);
      setShowDesTitle2(false);
      setShowDesTitle3(false);
    }
    if (e.target.id === "estate" && showDescription4 === true) {
      setShowDescription4(false);
      setShowDesTitle1(true);
      setShowDesTitle2(true);
      setShowDesTitle3(true);
      isBack(false);
    }
  };
  return (
    <div>
      <h1 id="services-header">Services</h1>
      <div className="cards">
        {ServiceItems.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
              <>
                <h4 id={item.id} onClick={(e) => handleServiceClick(e)}>
                  {showDesTitle1 ? item.title1 : null}
                  {showDesTitle2 ? item.title2 : null}
                  {showDesTitle3 ? item.title3 : null}
                  {showDesTitle4 ? item.title4 : null}
                </h4>
              </>
              <div className="description-div">
                <p className="description">
                  {showDescription1 ? item.description1 : null}
                  {showDescription2 ? item.description2 : null}
                  {showDescription3 ? item.description3 : null}
                  {showDescription4 ? item.description4 : null}
                </p>
              </div>
              {item.tsafaq ? (
                <>
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
                    <>
                      {Faq.map((item, index) => {
                        return (
                          <div key={index} className="faq">
                            <p>{item.Q}</p>
                            <p>{item.A}</p>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                </>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="close-button-div">
        {back ? (
          <button className="close-button" onClick={handleClose}>
            close
          </button>
        ) : null}
      </div>
      {!removeInfo ? (
        <>
          <p className="services-text">
            Whether it's next month's income or a financial goal that's still
            decades away, your financial future depends on the decisions you
            make today.
          </p>
          <p className="services-text">
            The Logan Group Securities begins with a detailed analysis of your
            financial resources, needs and goals. Throughout the financial
            planning process, we will answer your many important financial
            questions.
          </p>
          <p className="services-text">
            The process of financial planning allows you to discover the
            direction that is right for you. The Logan Group Securities will
            help you plan and implement a program that is specifically designed
            for your financial future.
          </p>
          <p className="services-text">
            The Logan Group Securities believes the ability to diversify a
            portfolio among a wide variety of investment tools is essential.
            Therefore, we represent many of the finest nationally recognized
            mutual funds and insurance companies. This allows us to provide
            appropriate investment vehicles for your needs. The Logan Group
            Securities provides these services to assist in the completion of
            your total financial plan.
          </p>
        </>
      ) : null}
      <br></br>
      <h2 className="center">Complimentary Services:</h2>
      {compServ.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.service}</p>
          </div>
        );
      })}
      <h2 className="center">Already Investing? </h2>
      <p>
        The Logan Group Securities will perform comparative rate evaluations on
        your existing accounts and portfolios.
      </p>
    </div>
  );
};

export default Services;
