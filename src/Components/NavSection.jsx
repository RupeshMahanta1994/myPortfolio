import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/pic.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 1em;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #efeded;

  @media (min-width: 480px) {
    padding: 1.2em 8em;
  }
`;
const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #facf0f;
  }

  & p {
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #facf0f;
    }
    @media (min-width: 480px) {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;
const MenuBtn = styled.div`
  & .MenuBtn {
    @media (min-width: 480px) {
      display: none;
    }
  }
`;
const NavLinks1 = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    background-color: #efeded;
    position: fixed;
    top: 5rem;
    right: 0;
    left: 0;
    padding: 2em 0;
  }
`;
const Links = styled.div`
  & span {
    font-size: 1.1rem;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #facf0f;
    }
  }
`;

function NavSection() {
  const [show, setShow] = useState(false);
  const HandleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar>
        <Logo>
          <img src={profile} alt="" />
          <AnchorLink style={{ textDecoration: "none" }} href="#Home">
            <p>rupesh mahanta</p>
          </AnchorLink>
        </Logo>
        <MenuBtn>
          {
            <NavLinks1>
              <AnchorLink style={{ textDecoration: "none" }} href="#Home">
                <Links>
                  <span>Home</span>
                </Links>
              </AnchorLink>
              <AnchorLink style={{ textDecoration: "none" }} href="#AbouMe">
                <Links>
                  <span>About Me</span>
                </Links>
              </AnchorLink>
              <AnchorLink style={{ textDecoration: "none" }} href="#Projects">
                <Links>
                  <span>Projects</span>
                </Links>
              </AnchorLink>
              <AnchorLink style={{ textDecoration: "none" }} href="#Contact">
                <Links>
                  <span>Contact</span>
                </Links>
              </AnchorLink>
            </NavLinks1>
          }
          {show ? (
            <>
              <NavLinks onClick={HandleClick}>
                <AnchorLink style={{ textDecoration: "none" }} href="#Home">
                  <Links>
                    <span>Home</span>
                  </Links>
                </AnchorLink>
                <AnchorLink style={{ textDecoration: "none" }} href="#AbouMe">
                  <Links>
                    <span>About Me</span>
                  </Links>
                </AnchorLink>
                <AnchorLink style={{ textDecoration: "none" }} href="#Projects">
                  <Links>
                    <span>Projects</span>
                  </Links>
                </AnchorLink>
                <AnchorLink style={{ textDecoration: "none" }} href="#Contact">
                  <Links>
                    <span>Contact</span>
                  </Links>
                </AnchorLink>
              </NavLinks>
            </>
          ) : (
            ""
          )}

          <div className="MenuBtn" onClick={HandleClick}>
            <AiOutlineMenu fontSize="1.5rem" />
          </div>
        </MenuBtn>
      </Navbar>
    </>
  );
}

export default NavSection;
