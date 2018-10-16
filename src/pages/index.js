import React from "react"
import About from "../components/about"
import Craftal from "../components/craftal"
import Lessons from "../components/lessons"
import SoundDesign from "../components/sounddesign"
import Voice from "../components/voice"
import Contact from "../components/contact"


import styles from "../sass/base.scss"

export default () => (
  <div>
      <About headerText="Ian McKenna"/>
      <Craftal />
      <Lessons />
      <SoundDesign />
      <Voice />
      <Contact />
  </div>
)
