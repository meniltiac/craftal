import React from "react"
import Fractal from "./fractal"

export default props => (
  <div className="about container">
      <Fractal />
      <h1>
          {props.headerText}
      </h1>
      <p>
          Classically trained <span>musician</span>, psychedelic sound <span>designer</span>,
          audio <span>engineer</span>, purveyor of funny
          voices, and teacher.
          <br/>
          <a href="mailto: craftalmusic@gmail.com?Subjet=Contact">
              Let's make some sounds together.
          </a>
      </p>
  </div>
)
