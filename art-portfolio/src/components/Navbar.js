import React, { Component } from "react";
import { Link } from "react-router-dom";
import art_logo from "../art_logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/* 
https://www.iconfinder.com/icons/1243689/art_logo_icon
Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'></Link>
            <ul className='navbar-nav.align-items-center'>
            <ul className='nav-item ml-5'></ul>
          <Link to='/' className='nav-link'>
            Back to Gallery
          </Link>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-shopping-cart' />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--darkGray);
  .nav-link {
    color: var(--darkRed) !important;
    font-size: 1.3rem; //  1rem = 20px
    text-transform: capitalize;
  }
`;
