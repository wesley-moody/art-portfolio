import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/assets/art_loogo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 navbump'>
        {/* 
        https://www.iconfinder.com/icons/1243689/art_logo_icon
        Creative Commons (Attribution 3.0 Unported);
           https://www.iconfinder.com/Makoto_msk */}

        <Link to='/'>
          <img src={Logo} alt='store' className='navbar-brand' />
          {/* Needs to change from phone to paintbrush but struggling for some reason */}
        </Link>
        <ul className='navbar-nav.align-items-center'>
          <ul className='nav-item ml-5'></ul>
          <Link to='/' className='nav-link'>
            View Gallery
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
    color: #c6aa21 !important;
    font-size: 1.8rem; //  1rem = 20px
    text-transform: capitalize;
    text-decoration: underline;
  }
`;
