import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";
import cover from "./hero.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={cover} autoPlay loop muted />
      <Container>
        <MainHeading>Your Data is secure with us</MainHeading>
        <HeroText>
          We Provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
