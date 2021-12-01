import React from "react";
import { footerItems } from "./FooterItems";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-text">
      <h3>The Logan Group Securities</h3>
      <h4>2150 Douglas Blvd, Suite 240</h4>
      <h4> Roseville, CA 95661-3872</h4>
      <h4> (916) 791-3200 Fax: (916) 791-6555</h4>
      <h4> Toll Free: (800) 684-4730</h4>
      <br></br>
      {footerItems.map((item, index) => {
        return (
          <div key={index}>
            <a className="footer-link" href={item.brokerCheck}>
              Broker Check
            </a>
            <br></br>
            <a className="footer-link" href={item.privacyNotice}>
              We respect your Privacy
            </a> 
          </div> 
        );
      })}
      <br></br>
      <h4> Member FINRA & SIPC</h4>
      <h5> Through our affiliated company, The Logan Group, we also offer insurance products</h5>
    </div>
  </div>
);

export default Footer;
