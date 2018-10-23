import React from "react"

export default props => (
  <div className="btn-container">
      <a className="btn" href={`mailto:craftalmusic@gmail.com?Subject=${props.btnSubject}`}>
          {props.btnText}
      </a>
  </div>
)
