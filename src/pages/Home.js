import React, {useState} from "react";
import Hero from "../components/Hero";
// import { ion-icon } from 'react-icons/md';
// import justCoffee from "../assets/justCoffee.png";
// import loqal from "../assets/loqal.png";
// import dayPlanner from "../assets/dayPlanner.png";
// import noteTaker from "../assets/noteTaker.png";
// import weatherDash from "../assets/weatherDash.png";
// import passwordGen from "../assets/passwordGen.png";
// import Footer from "../components/Footer";
// import StickyFooter from 'react-sticky-footer';
import seattle from "../assets/oseSeattle.jpg";
import denver from "../assets/oseDenver.jpg"
// import Carousel from 'react-bootstrap/Carousel'
import { AnimationWrapper } from 'react-hover-animation';
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg, UncontrolledCarousel, CardGroup, CardColumns, Col, Row, Container } from 'reactstrap';
import "./style.css";

function Home() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div>

        <section id ="homeF"></section>
        <Hero className="theHero"> 
                      <AnimationWrapper>
                      <img top width="100%" className ="seattle" src={seattle} alt="seattle" />
                      </AnimationWrapper>

                
                    <div className="introSection">
                    <h1 id="fullName">Oseghale Okogbo</h1>
                    <h2 id="oseTitle">Full Stack Web Developer</h2>
                    
                    </div>
        </Hero>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        
        <hr/>
        <section id ="portF"></section>
        <br/>
        <br />
        <br />
        
            <h1 className="headder" id="portfolioT">Portfolio</h1>
        <br /> 
        <Row>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" id="loq" src="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                  <CardBody className="cBody" >
                    <CardTitle className="projectTitle"></CardTitle>
                    <CardSubtitle className="projectSubTitle">Loqal</CardSubtitle>
                    <CardText>An application which allows the user to discover new music via genre.</CardText>
                    <a href="https://robertharris95.github.io/RDOProject1/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>
                    <a outline color="danger" href="https://github.com/robertharris95/RDOProject1" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80" alt="Card image cap" />
                  <CardBody className="cBody">
                    <CardTitle className="projectTitle"></CardTitle>
                    <CardSubtitle className="projectSubTitle">Just Coffee</CardSubtitle>
                    <CardText>An application which allows the user to purchase a monthly coffee subscription.</CardText>
                    <a href="http://justcoffee.herokuapp.com/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>                   
                    <a href="https://github.com/robinaguilar713/Project02" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="Card image cap" />
                  <CardBody className="cBody" >
                    <CardTitle className="projectTitle">Day Planner</CardTitle>
                    <CardSubtitle className="projectSubTitle"></CardSubtitle>
                    <CardText>An application which allows the user to plan out their day based on each hour, and log the events.</CardText>
                    <a href="https://ghalileo.github.io/DayPlanner/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>
                    <a href="https://github.com/Ghalileo/DayPlanner" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
        </Row>

        <br />
        <br />

        <Row>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" alt="Card image cap" />
                  <CardBody className="cBody">
                    <CardTitle className="projectTitle">Note Taker</CardTitle>
                    <CardSubtitle className="projectSubTitle"></CardSubtitle>
                    <CardText>An application which allows users to write down reminders and clear them once they are completed.</CardText>
                    <a href="https://morning-chamber-52406.herokuapp.com/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>
                    <a href="https://github.com/Ghalileo/Note-Taker" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                  <CardBody className="cBody">
                    <CardTitle className="projectTitle">Weather Dashboard</CardTitle>
                    <CardSubtitle className="projectSubTitle"></CardSubtitle>
                    <CardText>An application which allows the user to view the current weather as well as a 5 day forcast in any region.</CardText>
                    <a href="https://ghalileo.github.io/Weather-Dashboard/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>
                    <a href="https://github.com/Ghalileo/Weather-Dashboard" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1570150421181-54245b474749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                  <CardBody className="cBody">
                    <CardTitle className="projectTitle">Password Generator</CardTitle>
                    <CardSubtitle className="projectSubTitle"></CardSubtitle>
                    <CardText>An application which allows users to generate a password randomly with a series of letters, numbers and special characters.</CardText>
                    <a href="https://ghalileo.github.io/Password-Generator/" target="_blank" rel="noopener" className ="depLink"><span class="material-icons">launch</span></a>
                    <a href="https://github.com/Ghalileo/Password-Generator" target="_blank" rel="noopener" className ="depLink2"><i class="fa fa-github" ></i></a>
                  </CardBody>
                </Card>
              </div>
            </Col>
        </Row>

        
        <br/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* section break */}
        <section id ="experienceF"></section>
        <br/>
        <br/>
        <br />
        <br />
        <h1 className="headder" id="portfolioG">About Me</h1>
        <br/>
        <Row>
        <Col sm="6">
            <h4 id="textAbout">Born in Kano, Nigeria, Oseghale Okogbo is an individual who seeks success by embodying the mamba mentality; a state of being in which an individual gives 100% of their ability to commit 100% of the time. Throughout my journey on this earth, I have learned that the most valuable thing is not what you achieve, but how hard one is willing to work to secure the bag.</h4>
          </Col>
          <Col sm="6">
            <img src={denver} alt="denver" id="oseDenver"/>
            
          </Col>
          
        </Row>
        <br />
        <br />
        <br />
        <br />
       
    <br/>
    <br/>
    <section id ="experienceA"></section>
    <hr/>
    
    <br/>           
    <br/>
    
    <h1 className="headder" id="portfolioT">Experience</h1>
    <br/>
    <br/>
    <br/>
    
    
    
    
    
    <CardGroup>
    <Card body className="expBody">
          <h3 class="expSubTitle">LinkedIn</h3>
          {/* <Button outline color="warning" className="expButt" href="https://github.com/Ghalileo" target="_blank">GitHub</Button> */}
          <a href="https://www.linkedin.com/in/oseokogbo/" target="_blank" rel="noopener" ><i class="fa fa-linkedin" id="expLinkedIn"></i></a>
          
        </Card>
      <Card body className="expBody">
          <h3 class="expSubTitle">Resume</h3>
          {/* <Button outline color="warning" className="expButt" href="https://github.com/Ghalileo" target="_blank">GitHub</Button> */}
          <a href="https://drive.google.com/open?id=1bosvyzSrq8X4iUWzoNfenHxHlAkgdyGP" target="_blank" rel="noopener"><span class="material-icons" id="expResume">
text_snippet
</span></a>
          
        </Card>
      <Card body className="expBody" id="gitHubButtonSection">
          <h3 class="expSubTitle">GitHub</h3>
          {/* <Button outline color="warning" className="expButt" href="https://github.com/Ghalileo" target="_blank">GitHub</Button> */}
          <a href="https://github.com/Ghalileo" target="_blank" rel="noopener"><i class="fa fa-github-square" id="expRepo"></i></a>
          
        </Card>
    </CardGroup>
    <br />
        <br />
        <br />
        <br />
       
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <section id="experienceC"></section>
    <h1 className="headder" id="contactSection">Contact Me</h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 id="contactSubHeader">Oseghale Okogbo 2020</h2>
      <h3><span class="material-icons" id="mailIcons" >
mail
</span><a href="mailto:ose.okogbo@gmail.com" id="contactEmail">ose.okogbo@gmail.com</a></h3>
    </div>

       
    );
};
export default Home;