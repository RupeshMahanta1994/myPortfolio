import React, { useState } from 'react'
import styled from 'styled-components'

import AnchorLink from "react-anchor-link-smooth-scroll";

const Skills = ["React.js", "JavaScript", "UI-UX Design",
    "HTML5", "CSS3", "SASS", "CI/CD", "APIs", "Git", "Trello", "Jira"]

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

const AboutMe = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1.5em;
    text-align: center;
    background-color: #f0f0f0;

    & p{
        margin: 1em 0;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        @media (min-width: 480px){
            
            width: 60%;
            font-size: 1.2rem;
            line-height: 1.8rem;
        }
    }


`

const MyDetails = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    
    margin-top: 3em;
    text-align: left;
    @media (min-width: 480px){
        padding: 0 6em;
        flex-direction: row;
        gap: 5rem;
    }


    & .Left{
        @media (min-width: 480px){
            width: 50%;
        }
        & h4{
            font-size: 1.2rem;
            font-weight: 700;
            @media (min-width: 480px){
                font-size: 1.5rem;
            }
        }
        & p {
            width: 100%;
            font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        text-align: justify;
        @media (min-width: 480px){
                font-size: 1rem;
            }

        }
    }

    & .Right{
        
        margin-top: 2em;
        & h4{
            font-size: 1.2rem;
            font-weight: 700;
            @media (min-width: 480px){
                font-size: 1.5rem;
            }
            
        }

        & .Skills{

            margin-top: 2em;
            display: flex;
            gap: 0.9rem;
            flex-wrap: wrap;
            & span{
                color: #666666;
                background-color: #99999933;
            
            padding: 0.8em;
            margin-right: 0.3em;
            margin-bottom: 0.3em;
            border-radius: 0.3rem;
        }
        }
        @media (min-width: 480px){
            margin-top: 0;
            width: 50%;
            
        }
       
    }
`

function AboutMeSection() {
    return (
        <>
            <AboutMe>
                <Header>
                    about me
                </Header>
                <p>
                    Here you will find
                    more information
                    about me, what I
                    do, and my current
                    skills mostly in terms
                    of programming and
                    technology
                </p>

                <MyDetails>
                    <div className="Left">
                        <h4>
                            Get to Know me
                        </h4>
                        <p>
                            I possess a deep passion for designing visually captivating and user-friendly websites that offer dynamic
                            experiences and effortless navigation. With a solid foundation in front-end development, my expertise
                            lies in crafting responsive websites. I am driven to continuously explore emerging technologies in order
                            to create valuable and innovative products.
                            Check out some of my work in the Projects section.
                            <br />
                            <br />
                            I am passionate about sharing my knowledge and
                            experience in web development to benefit the Dev Community.
                            Over the course of time, I have accumulated valuable insights and
                            expertise in this field, and I take great pleasure in creating
                            and disseminating content that can assist others. Feel free to
                            Connect or Follow me
                            on my <a style={{ color: "#FACF0F", fontWeight: 'bold' }} href="https://www.linkedin.com/in/rupesh-mahanta-489968b2/">Linkedin</a>  where I post useful content related to Web Development and Programming
                            <br />
                            <br />
                            I'm open to Job opportunities where I can contribute,
                            learn and grow. If you have a good opportunity that matches
                            my skills and experience then don't hesitate to contact me.
                        </p>

                        <AnchorLink style={{ textDecoration: "none" }} href='#Contact'><Links><Button>Contact</Button></Links></AnchorLink>
                    </div>
                    <div className="Right">
                        <h4>
                            My Skills
                        </h4>
                        <div className="Skills">
                            {
                                Skills.map((skill) => {
                                    return <span>{skill}</span>
                                })
                            }
                        </div>
                    </div>

                </MyDetails>

            </AboutMe>
        </>
    )
}

export default AboutMeSection
