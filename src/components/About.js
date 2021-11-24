import React from "react";
import { aboutItems } from "./About-items";
import "./About.css";
import {
  CarouselProvider,
  Slider,
  Slide,
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
          totalSlides={2}
        >
            <Slider>
              {aboutItems.map((item, i) => {
                return (
                  <Slide key={i} index={i}>
                    <div className="slide-content">
                      <img className="about-img" src={item.aboutImg}></img>
                      <h3>{item.aboutName}</h3>
                      <h4>{item.aboutTitle}</h4>
                      <div>{item.aboutDesc}</div>
                      <ButtonBack>Back</ButtonBack>
                      <ButtonNext>Next</ButtonNext>
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
