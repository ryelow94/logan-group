import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
    return(
      <div>
        <div className="home-container">
        <img src="https://images.crexi.com/assets/561082/9856a247400c45ef9c85eeb95454b519_716x444.jpg"/>
        <p className="main-text">
          The Logan Group Securities is a registered Broker/Dealer specializing
          in retirement planning for Educators. We offer a wide variety of
          investments to help meet your financial objectives.
       
          We custom tailor investment portfolios to suit individuals as well as handle
          corporate financial objectives. This independence allows us to focus on
          your individual situation, rather than on a specific company's products. Moreover, we
          represent companies and finanical products with long-term, proven
          track records. That said, our emphasis is always on what is best for our clients,
          not the investment companies.
       
          The Logan Group Securities believes that client services should be regarded
          above all other priorities in our business. That's why we are
          committed to serving our clients on a long-term basis.
        </p> 
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.871299754913!2d-121.24964818479567!3d38.743715479594705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1fef63094151%3A0x4c3b7399352e8902!2s2150%20Douglas%20Blvd%2C%20Roseville%2C%20CA%2095661!5e0!3m2!1sen!2sus!4v1639437167481!5m2!1sen!2sus"></iframe>
      </div>
    );
  }

export default Home;
