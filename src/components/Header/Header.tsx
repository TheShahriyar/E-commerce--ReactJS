import React, { Component } from 'react'
import styled from "styled-components"
import Logo from "../../images/crown.svg"
import {Link} from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Link className="logo-container" to="/">
          <img src={Logo} className="logo" alt="Logo" />
        </Link>
        <Options>
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/contact">CONTACT</Link>
        </Options>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
`

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .option {
    padding: 10px 15px;
  }

  a {
    text-decoration: none;
  }
`
