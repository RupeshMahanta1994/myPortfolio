import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import hand from "../assets/hand.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

const Button = styled.button`
  background-color: #facf0f;
  padding: 0.8rem 3rem;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  outline: none;
  font-family: "Ubuntu";
  letter-spacing: 0.1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  @media (min-width: 480px) {
    font-size: 1.2rem;
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

const ProfilePic = styled.div`
  width: 50%;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  @media (max-width: 480px) {
    display: none;
  }
`;

const Shape = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: rgba(250, 207, 15, 0.1);
  z-index: -1;
`;

const SocialIcons = styled.div`
  width: 50px;
  height: 100px;
  padding: 2em;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  background-color: #efeded;
  flex-direction: column;
  align-item: center;
  justify-content: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  & img {
    width: 40px;
    color: red;
  }
`;

const Home = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;
  background-color: #fff;
  padding: 5em 2em;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40rem;
    padding: 2em 0.8em;
  }

  & h4 {
    font-size: 2.5rem;
    font-weight: 700;

    letter-spacing: 0.1rem;
    @media (min-width: 480px) {
      font-size: 3.5rem;
    }
  }

  & p {
    margin: 2em 0;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    @media (min-width: 480px) {
      font-size: 1.3rem;
      width: 60%;
      line-height: 1.8rem;
    }
  }
`;

function HomeSection() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <SocialIcons>
        <Icons>
          <a href="https://github.com/RupeshMahanta1994">
            <img src={github} alt="" />
          </a>
        </Icons>
        <Icons>
          <a href="https://www.linkedin.com/in/rupesh-mahanta/">
            <img src={linkedin} alt="" />
          </a>
        </Icons>
      </SocialIcons>
      <Home>
        <h4>
          Front-End React <br /> Developer <img src={hand} alt="" />
        </h4>

        <p>Hi, I'm Rupesh Mahanta. A passionate Front-end React Developer</p>
        <AnchorLink style={{ textDecoration: "none" }} href="#Projects">
          <Links>
            <Button>projects</Button>
          </Links>
        </AnchorLink>
      </Home>
      <ProfilePic>
        <Shape></Shape>
        <img src={profile} alt="" />
      </ProfilePic>
    </div>
  );
}

export default HomeSection;
