import React, { useState } from 'react'
import styled from 'styled-components'
import profile from '../assets/pic.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import aegis from '../assets/aegis.png'

import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa"

const Header = styled.div`
    font-size: 2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1em;
    @media (min-width: 480px){
        font-size: 2.3rem;
    }
`
const Button = styled.button`
    background-color: #FACF0F;
    padding: 0.8rem 3rem;
    color: black;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    outline: none;
    font-family: 'Ubuntu';
    letter-spacing: 0.1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    @media (min-width: 480px){
        font-size: 1.2rem;
    }
`

const Projects = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em 2em;
    background-color: #fff;
    @media (min-width: 480px){
        padding: 5em 6em;
    }
    & p {
            font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin: 1.5em 0;
        @media (min-width: 480px){
            width: 60%;
            text-align: center;
                font-size: 1.2rem;
            }
    }
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1em;
    gap: 1rem;

    

`
const Card = styled.div`
align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #efeded;
    border-radius: 0.5rem;
    padding: 1em;

    @media (min-width: 480px){
        flex-direction: row;
        gap: 2.5rem;
        width: 100%;
        margin-bottom: 2em;
        padding: 2em 3em;
        &:nth-child(2n){
            & img{
                order: 2;
            }
        }
    }

    & img{
        width: 16rem;
        margin-bottom: 2em;
        border: 2px solid lightgray;
        border-radius: 0.5rem;
        @media (min-width: 480px){
        width: 50%;
        margin: 0;
    }
    }

    & .CardText{
        display: flex;
        align-items: center;
        flex-direction: column;
       
        & h5{
        font-size: 1.2rem;
            font-weight: 500;
            

    }
    

    & p {
            font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.3rem;
        & ul {
            list-style: none;
            & li {
                margin-bottom: 0.7rem;
            }
        }
        
    }

    @media (min-width: 480px){
            text-align: left;
            align-items: flex-start;
            flex-direction: column;
            width: 50%;

            & h5{
                font-size: 1.7rem;
            }

            & p{
                width: 100%;
                font-size: 1.1rem;
                font-weight: 300;
                line-height: 1.5;
                text-align: left;

                & ul {
                    list-style: circle;
                }
            }
        }

    }
    

`

const ProjectSection = () => {
    return (
        <>
            <Projects>
                <Header>
                    projects
                </Header>
                <p>
                    Here you will find
                    some of the personal
                    and clients projects
                    that I created with
                    each project containing
                    its own case study
                </p>

                <Cards>

                    <Card>
                        <img src={two} alt="" />
                        <div className="CardText">
                            <h5>Gymate</h5>
                            <p>
                                <ul>
                                    <li>
                                        Gymate is a responsive frontend website designed using
                                        React, Vite, JS.
                                    </li>
                                    <li>
                                        This website is aiming to provide information about gym
                                        facilities, classes, trainers, and membership options, promoting a healthy and active lifestyle.
                                    </li>
                                    <li>
                                        The UI-UX of the website is build using CSS3
                                    </li>
                                </ul>


                            </p>
                            <a href="https://gymate-b4lh.vercel.app/">
                                <Button>live <FaExternalLinkAlt fontSize="1.1rem" /></Button>
                            </a>

                        </div>

                    </Card>

                    <Card>
                        <img src={aegis} alt="" />
                        <div className="CardText">
                            <h5>Aegis</h5>
                            <p>
                                <ul>
                                    <li>
                                        AEGIS is a modern frontend website that serves as an innovative content provider platform.
                                    </li>

                                    <li>
                                        Our goal is to bridge the gap between content creators and their target audience by an user friendly interface
                                    </li>

                                    <li>
                                        This website is build using Styled-Components, React and deployed using Github CI/CD pipeline to Vercel.
                                    </li>
                                </ul>







                            </p>
                            <a href="https://spotlight-navy.vercel.app/">
                                <Button>live <FaExternalLinkAlt fontSize="1.1rem" /></Button>
                            </a>

                        </div>

                    </Card>

                    <Card>
                        <img src={one} alt="" />
                        <div className="CardText">
                            <h5>cryptoChecker</h5>
                            <p>
                                <ul>
                                    <li>
                                        cryptoChecker is a single page frontend website that offers
                                        comprehensive platform.
                                    </li>
                                    <li>
                                        It provides users with a user-friendly interface that keeps
                                        them informed about the latest market trends, prices, and
                                        relevant data.
                                    </li>
                                    <li>
                                        This is build using cryptocurrency API, React, SASS.
                                    </li>
                                </ul>


                            </p>
                            <a href="https://cryptochecker-theta.vercel.app/">
                                <Button>live <FaExternalLinkAlt fontSize="1.1rem" /></Button>
                            </a>

                        </div>

                    </Card>



                    <Card>
                        <img src={three} alt="" />
                        <div className="CardText">
                            <h5>GoCar</h5>
                            <p>
                                <ul>
                                    <li>
                                        Gocar is multipaged Frontend
                                        end website which shows various
                                        cars in two catrgories.
                                    </li>
                                    <li>
                                        Used cars
                                        and New cars.
                                    </li>
                                </ul>

                            </p>
                            <a href="">
                                <Button>live <FaExternalLinkAlt fontSize="1.1rem" /></Button>
                            </a>
                        </div>

                    </Card>






                </Cards>
            </Projects>
        </>
    )
}

export default ProjectSection
