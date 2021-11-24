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

import 'pure-react-carousel/dist/react-carousel.es.css';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
        {aboutItems.map((item,i) => {
          return (
            <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={20}
        totalSlides={3}
      >
            <Slider>
          <Slide index={item[i]}>{item.aboutDesc}.</Slide>
          <Slide >I am the second Slide.</Slide>
          <Slide >I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
          )
        })}
    </div>
  );
};

export default About;
