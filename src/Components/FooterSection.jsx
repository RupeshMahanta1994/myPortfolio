import styled from "styled-components";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: black;
  padding: 3em 2em;
  @media (min-width: 480px) {
    padding: 2em 6em;
  }

  & .FooterText {
    display: flex;
    flex-direction: column;
    @media (min-width: 480px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 4em 0;
    }
    & .Right {
      & h4 {
      }
      & .SocilaIcons {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1em 0;
      }
      @media (min-width: 480px) {
        width: 50%;
        & h4 {
          font-size: 1.3rem;
        }
      }
    }

    & .Left {
      & h4 {
        font-size: 1.1rem;
        font-weight: 700;
      }

      & p {
        font-size: 0.8rem;
        color: #fff;
        line-height: 1.1rem;
        margin-top: 1em;
      }
      @media (min-width: 480px) {
        width: 50%;
        & h4 {
          font-size: 1.3rem;
        }

        & p {
          font-size: 0.9rem;
          line-height: 1.3rem;
        }
      }
    }
  }

  & .CopyWrite {
    & p {
      border-top: 1px solid #f0f0f0;
      padding-top: 2rem;
      text-align: center;
      color: #fff;
      font-size: 0.6rem;

      & span {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
      @media (min-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const FooterSection = () => {
  return (
    <>
      <Footer>
        <div className="FooterText">
          <div className="Right">
            <h4>SOCIAL</h4>

            <div className="SocilaIcons">
              <a href="https://www.linkedin.com/in/rupesh-mahanta/">
                <AiFillLinkedin fontSize="1.6rem" color="#fff" />
              </a>

              <a href="https://github.com/RupeshMahanta1994">
                <AiFillGithub fontSize="1.6rem" color="#fff" />
              </a>
            </div>
          </div>

          <div className="Left">
            <h4>RUPESH MAHANTA</h4>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
        <br />
        <div className="CopyWrite">
          <p>
            © Copyright 2023. Made by{" "}
            <AnchorLink style={{ textDecoration: "none" }} href="#Home">
              <span>Rupesh Mahanta</span>
            </AnchorLink>
          </p>
        </div>
      </Footer>
    </>
  );
};

export default FooterSection;
