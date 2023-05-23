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

    @media (min-width: 480px){
        flex-direction: row;
        gap: 1.5rem;
        width: 100%;
        margin-bottom: 2em;
        padding: 3em 4em;
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
                font-size: 1.1rem;
                font-weight: 300;
                line-height: 1.5;
                text-align: left;
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
                                Gymate is a
                                Frontend project that
                                contains multiple pages,
                                some cool animations, a signUp
                                page.

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
                                Aegis is a fully responsive
                                website powered with Chakra UI.


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
                                cryptoChecker is a Frontend
                                website which recevies data
                                from a Cryptocurrency API and
                                gives a list of popular Currencies.
                                It also provides a search Filter.
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
                                Gocar is multipaged Frontend
                                end website which shows various
                                cars in two catrgories. Used cars
                                and New cars.
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
