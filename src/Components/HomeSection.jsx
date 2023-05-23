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

const Links = styled.div`

& span{
    font-size: 1.1rem;
    color:#333333;
font-weight: bold;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    color: #FACF0F;
}
}
    
`


const Home = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    padding: 5em 2em;
    @media (min-width: 480px){
        justify-content: center;
        height: 40rem;
    }


    & h4{
       
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        @media (min-width: 480px){
        
        font-size: 3.5rem;
    }


    }

    & p{

        margin: 2em 0;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        @media (min-width: 480px){
        font-size: 1.3rem;
        width: 60%;
        line-height: 1.8rem;
    }

    }
`

function HomeSection() {
    return (
        <>
            <Home>

                <h4>
                    hey, i'm rupesh
                    mahanta
                </h4>

                <p>
                    A Frontend focused Web
                    Developer building the
                    Frontend of Websites and
                    Web Applications that leads
                    to the success of the overall product
                </p>
                <AnchorLink style={{ textDecoration: "none" }} href='#Projects'><Links><Button>projects</Button></Links></AnchorLink>

            </Home>
        </>
    )
}

export default HomeSection
