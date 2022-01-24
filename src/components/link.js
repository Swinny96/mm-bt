import React from "react"

const Link = props => (
  /*eslint-disable*/
  <li className={"Sidebar-Li" + " " + props.state}>
    <a href="/" className={"Sidebar-Link" + " " + props.linkstate}>
      <span className="Sidebar-Text">{props.linkname}</span>
    </a>
  </li>
)

export default Link