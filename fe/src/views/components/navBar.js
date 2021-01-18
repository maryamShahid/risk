import React, { PureComponent } from "react";
import styled from "styled-components";
import logoImage from "../../assets/risk-logo.jpeg"
import { connect } from 'react-redux'

// Bootstrap
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import fire from "../../firebase";

import { BREAKPOINTS } from "../../config/gameConstants"


class NavBar extends PureComponent {
  state = { isOpen: false };

  logout() {
    fire.auth().signOut();
  }

  open = () => {
    this.setState({
      isOpen: true,
    });
  }

  close = () => {
    this.setState({
      isOpen: false,
    });
  }

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isOpen } = this.state;
    const { currentUser } = this.props;
    const isSignedIn = !(Object.keys(currentUser).length === 0 && currentUser.constructor === Object);

    return (
      <StyledNavbar expand="md" sticky="top" light >
        <Container>
          <StyledNavbarBrand href="/">
            <StyledLogo src={logoImage} />
          </StyledNavbarBrand>
          <NavbarToggler className="menu" onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {isSignedIn
              ?
              < Nav className="ml-auto" navbar>
                <NavItem>
                  <StyledNavLink href="/" onClick={() => { this.close(); }}>Home</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink href="/about" onClick={() => { this.close(); }}>About Us</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink href="/how" onClick={() => { this.close(); }}>How To Play</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink href="/" onClick={() => { this.logout(); }}>Log out</StyledNavLink>
                </NavItem>
              </Nav>
              :
              < Nav className="ml-auto" navbar>
                <NavItem>
                  <StyledNavLink href="/login" onClick={() => { this.close(); }}>LogIn</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink href="/signup" onClick={() => { this.close(); }}>SignUp</StyledNavLink>
                </NavItem>
              </Nav>
            }
          </Collapse>
        </Container>
      </StyledNavbar >
    );
  }
}

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 2px 3px -2px rgba(0,0,0,0.3);
  background: white;
  color: black;
  height: 100px;

  @media (${BREAKPOINTS.sm}) {
    height: unset;
    &.small {
      height: unset;
      margin-bottom: unset;
    }
    .navbar-brand {
      padding-top: 12px;
      font-size: 24px;
    }
    .menu {
      padding-right: 0;
      :focus {
        outline: 0;
      }
    }
    ul {
      margin: 24px 0;
    }
    li {
      text-align: center;
      margin: 8px 0;
    }
  }
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  padding: 0;
`;

const StyledLogo = styled.img`
  height: 100px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 8px;
  padding-bottom: 2px;
  color: var(--color-header-text) !important;
  padding: 8px 16px !important;
  border-radius: 8px;
  :hover {
    background: white
  }
  &.active {
    padding-left: 24px !important;
    padding-right: 24px !important;
    color: black;
    background: white;
  }
`;

const mapStateToProps = state => ({
  currentUser: state.currentUser || {}
});

export default connect(mapStateToProps)(NavBar);