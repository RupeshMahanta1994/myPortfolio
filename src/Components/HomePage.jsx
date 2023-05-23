import styled from 'styled-components'
import AboutMeSection from './AboutMeSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'
import HomeSection from './HomeSection'
import NavSection from './NavSection'


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


function HomePage() {



    return (
        <>

            <Container >
                <NavSection />

                <div id="Home">
                    <HomeSection />
                </div>

                <div id="AbouMe">
                    <AboutMeSection />
                </div>

                <div id="Projects">
                    <ProjectSection />
                </div>

                <div id="Contact">
                    <ContactSection />
                </div>
                <FooterSection />

            </Container>
        </>
    )
}

export default HomePage
