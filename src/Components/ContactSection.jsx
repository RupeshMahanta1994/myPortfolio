import styled from 'styled-components'
import AnchorLink from "react-anchor-link-smooth-scroll";

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
const ContactSection = () => {
    return (
        <>
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


                    <AnchorLink style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} href='#Home'><Button>submit</Button></AnchorLink>
                </FormDiv>
            </Contact>
        </>
    )
}

export default ContactSection
