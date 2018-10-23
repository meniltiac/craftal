import React from "react"
import Helmet from 'react-helmet'

import About from "./about"
import Craftal from "./craftal"
import Lessons from "./lessons"
import SoundDesign from "./sounddesign"
import Voice from "./voice"
import Contact from "./contact"

export default () =>
<div className="container">
    <Helmet
        key="app-head"
        titleTemplate="Ian McKenna | Craftal"
        defaultTitle="Ian McKenna"
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ian McKenna | Craftal</title>
        <meta name="apple-mobile-web-app-title" content=" " />
        <meta name="application-name" content=" " />
      </Helmet>
      <About headerText="Ian McKenna"/>
      <Craftal />
      <Lessons />
      {/* <SoundDesign /> */}
      <Voice />
      {/* <Contact /> */}
  </div>
