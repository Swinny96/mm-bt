import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header-Wrapper">
      <a href="/">
        <img
          className="Header-Logo"
          src="https://mobilemanager.bt.com/CustomerWebCommon/images/bt/logo.png"
          alt="logo"
        />
      </a>
      <a href="/">
        <span className="Header-Text">{siteTitle}</span>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header