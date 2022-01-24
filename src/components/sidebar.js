import React from "react"

const Sidebar = props => (
  <nav className="Sidebar">
    <ul className="Siderbar-Ul">
      <div className="Sidebar-Links">
        {props.link1}
        {props.link2}
        {props.link3}
        {props.link4}
        {props.link5}
        {props.link6}
        {props.link7}
        {props.link8}
        {props.link9}
        {props.link10}
      </div>
    </ul>
  </nav>
)

export default Sidebar
