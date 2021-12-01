import React from "react";
import { aboutItems } from "./About-items";
import "./About.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

 import "pure-react-carousel/dist/react-carousel.es.css";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          totalSlides={3}
        >
            <Slider>
              {aboutItems.map((item, i) => {
                return (
                  <Slide key={i} index={i}>
                    <div className="slide-content">
                      <img className="about-img" alt="about-img" src={item.aboutImg}></img>
                      <h3>{item.aboutName}</h3>
                      <h4>{item.aboutTitle}</h4>
                      <div>{item.aboutDesc}</div> 
                      <div className="button-div">
                      <ButtonBack className="fas fa-angle-left"></ButtonBack>
                      <DotGroup/>
                      <ButtonNext className="fas fa-angle-right"></ButtonNext>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default About;
