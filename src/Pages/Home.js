import React from "react"
import Features from "../Components/Features/Features"
import Hero from "../Components/Hero/Hero"
import { heroOne, heroTwo, heroThree } from "../Data/HeroData"
import { Content } from "../Components/Content/Content"
import Carousel from "../Components/Carousel/Carousel"

//Hero Feature Content Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  )
}

export default Home
