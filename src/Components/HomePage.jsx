import React, { useState } from 'react'
import styled from 'styled-components'
import profile from '../assets/pic.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'

import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa"

const Skills = ["HTML", "CSS", "JavaScript", "ReactJS", "ChakraUI"]

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu',sans-serif;
    padding-top: 5em;
    
    

    & p{
        color: #555555;
    }
    
`


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

const Navbar = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8em 1em;
    position: fixed;
    top: 0;
    background-color: #efeded;
    
    @media (min-width: 480px){
        padding:1.2em 8em;
    }

`
const Logo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    & img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        background-color: #FACF0F;
    }

    & p {
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover{
    color: #FACF0F;
}
        @media (min-width: 480px){
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
`
const MenuBtn = styled.div`

    & .MenuBtn{
        @media (min-width: 480px){
        display: none;
    }
    }
    

    
`
const NavLinks1 = styled.div`
display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px){
        display: none;
    }
    
`

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px){
        flex-direction: column;
        background-color: #efeded;
        position: fixed;
        top: 5rem;
        right: 0;
        left: 0;
        padding: 2em 0;
        

        
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

    

`
const Card = styled.div`
align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 480px){
        flex-direction: row;
        gap: 5rem;
        width: 100%;
        margin-bottom: 8em;
        &:nth-child(2n){
            & img{
                order: 2;
            }
        }
    }

    & img{
        width: 16rem;
        margin: 2em 0;
        border: 2px solid lightgray;
        border-radius: 0.5rem;
        @media (min-width: 480px){
        width: 50%;
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

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;    
    padding: 6em 2em ;
    background-color: #f0f0f0;
    
    @media (min-width: 480px){
       
    }

    & p{
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.3rem;
        @media (min-width: 480px){
            width: 60%;
            font-size: 1.2rem;
        }

    }
`
const FormDiv = styled.div`
background-color: #fff;
margin-top: 3em;
display: flex;
gap: 0.5rem;
flex-direction: column;
text-align: left;
padding: 1.5em;



& label{
    font-weight: 300;
    font-size: 0.9rem;
}

& input{
    padding: 1em;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    &::placeholder{
        font-family: 'Ubuntu';
    }
}

& textarea{
    padding: 1em;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    margin-bottom: 1em;

    &::placeholder{
        font-family: 'Ubuntu';
    }

}

@media (min-width: 480px){
    width: 60%;
    padding: 2.5em;

    & label{
        font-size: 1.1rem;
        font-weight: 300;
    }

    & input,textarea{
        font-size: 1.05rem;
        margin-bottom: 2em;
    }
}
`

const Footer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: black;
    padding: 3em 2em;
    @media (min-width: 480px){
        padding: 2em 6em;
    }
    

   & .FooterText{
    display: flex;
    flex-direction: column;
    @media (min-width: 480px){
        flex-direction: row;
        justify-content: space-between;
        padding: 4em 0;
    }
    & .Right{
        & h4{
            
        }
        & .SocilaIcons{
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 1em 0;
        }
        @media (min-width: 480px){
            width: 50%;
            & h4{
                font-size: 1.3rem;
            }
        }
    }

    & .Left{
        & h4{
            font-size: 1.1rem;
            font-weight: 700;
        }

        & p{
        font-size: 0.8rem;
        color: #fff;
        line-height: 1.1rem;
        margin-top: 1em;

    }
    @media (min-width: 480px){
            width: 50%;
            & h4{
                font-size: 1.3rem;
            }

            & p{

        font-size: 0.9rem;
        line-height: 1.3rem;
            }
        }

    }
   }

    & .CopyWrite{
        & p{
            border-top: 1px solid #f0f0f0;
            padding-top: 2rem;
            text-align: center;
            color: #fff;
        font-size: 0.6rem; 

        & span{
            color: #fff;
            border-bottom: 1px solid #fff;
        }
        @media (min-width: 480px){
            font-size: 0.8rem;
        }
    }
}
`


function HomePage() {

    const [show, setShow] = useState(false);
    const HandleClick = () => {
        setShow(!show)
    }


    return (
        <>

            <Container >
                <Navbar>
                    <Logo>
                        <img src={profile} alt="" />
                        <AnchorLink style={{ textDecoration: "none" }} href='#Home'><p>rupesh mahanta</p></AnchorLink>

                    </Logo>
                    <MenuBtn>

                        {
                            <NavLinks1>
                                <AnchorLink style={{ textDecoration: "none" }} href='#Home'><Links><span>Home</span></Links></AnchorLink>
                                <AnchorLink style={{ textDecoration: "none" }} href='#AbouMe'><Links><span>About Me</span></Links></AnchorLink>
                                <AnchorLink style={{ textDecoration: "none" }} href='#Projects'><Links><span>Projects</span></Links></AnchorLink>
                                <AnchorLink style={{ textDecoration: "none" }} href='#Contact'><Links><span>Contact</span></Links></AnchorLink>

                            </NavLinks1>
                        }
                        {
                            show ? <>
                                <NavLinks onClick={HandleClick}>
                                    <AnchorLink style={{ textDecoration: "none" }} href='#Home'><Links><span>Home</span></Links></AnchorLink>
                                    <AnchorLink style={{ textDecoration: "none" }} href='#AbouMe'><Links><span>About Me</span></Links></AnchorLink>
                                    <AnchorLink style={{ textDecoration: "none" }} href='#Projects'><Links><span>Projects</span></Links></AnchorLink>
                                    <AnchorLink style={{ textDecoration: "none" }} href='#Contact'><Links><span>Contact</span></Links></AnchorLink>

                                </NavLinks>
                            </> : ""
                        }


                        <div className="MenuBtn" onClick={HandleClick}>
                            <AiOutlineMenu fontSize="1.5rem" />
                        </div>
                    </MenuBtn>


                </Navbar>


                <div id="Home">
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
                </div>

                <div id="AbouMe">
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
                                    I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                                    <br />
                                    <br />
                                    I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a style={{ color: "#FACF0F", fontWeight: 'bold' }} href="https://www.linkedin.com/in/rupesh-mahanta-489968b2/">Linkedin</a>  where I post useful content related to Web Development and Programming
                                    <br />
                                    <br />
                                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
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
                </div>

                <div id="Projects">
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
                                        <Button>live <FaExternalLinkAlt /></Button>
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
                                        <Button>live <FaExternalLinkAlt /></Button>
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
                                        <Button>live <FaExternalLinkAlt /></Button>
                                    </a>
                                </div>

                            </Card>




                        </Cards>
                    </Projects>
                </div>

                <div id="Contact">
                    <Contact>
                        <Header>contact</Header>
                        <p>
                            Feel free to Contact me
                            by submitting the form
                            below and I will get back
                            to you as soon as possible
                        </p>
                        <FormDiv>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter Your Name' />
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter Your Email' />
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                            <Button>submit</Button>
                        </FormDiv>
                    </Contact>
                </div>

                <Footer>
                    <div className="FooterText">
                        <div className="Right">
                            <h4>SOCIAL</h4>

                            <div className="SocilaIcons">
                                <a href="https://www.linkedin.com/in/rupesh-mahanta-489968b2/">
                                    <AiFillLinkedin fontSize="1.6rem" color='#fff' />
                                </a>

                                <AiFillGithub fontSize="1.6rem" cursor="pointer" />
                                <AiOutlineTwitter fontSize="1.6rem" cursor="pointer" />
                            </div>
                        </div>

                        <div className="Left">
                            <h4>RUPESH MAHANTA</h4>
                            <p>
                                A Frontend focused Web Developer
                                building the Frontend of
                                Websites and Web Applications
                                that leads to the success of
                                the overall product
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className='CopyWrite'>

                        <p>
                            © Copyright 2023. Made by <AnchorLink style={{ textDecoration: "none" }} href='#Home'><span>Rupesh Mahanta</span></AnchorLink>
                        </p>
                    </div>
                </Footer>

            </Container>
        </>
    )
}

export default HomePage
