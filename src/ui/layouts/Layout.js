import React from "react"
import PropTypes from "prop-types"
import {
  Contained,
  NavWrapper,
  ViewWrapper,
  Wrapper,
} from "../elements/Wrapper"
import Navbar from "../../components/Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <Contained>
      <Wrapper>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <ViewWrapper>
          {children}
          <p style={{ fontSize: "1.8rem", bottom: "0%", color: "grey" }}>
            @meSubhoKarma
          </p>
        </ViewWrapper>
      </Wrapper>
    </Contained>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
