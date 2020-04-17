import React, {useState} from "react";
import Hero from "../components/Hero";
// import justCoffee from "../assets/justCoffee.png";
// import loqal from "../assets/loqal.png";
// import dayPlanner from "../assets/dayPlanner.png";
// import noteTaker from "../assets/noteTaker.png";
// import weatherDash from "../assets/weatherDash.png";
// import passwordGen from "../assets/passwordGen.png";
import seattle from "../assets/oseSeattle.jpg";
import denver from "../assets/oseDenver.jpg"
// import Carousel from 'react-bootstrap/Carousel'
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg, UncontrolledCarousel, CardGroup, CardColumns, Col, Row } from 'reactstrap';
import "./style.css";

function Home() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div>

        <section id ="homeF"></section>
        <Hero> 
            <Row>
                <Col sm="6">    
                        <img top width="100%" className ="seattle" src={seattle} alt="seattle" />
                </Col>

                <Col sm="6">
                    <div className="opening">
                    <h1 id="fullName">Oseghale Okogbo</h1>
                    <h2 id="oseTitle">Full Stack Web Developer</h2>
                    {/* <h3 id="statement">Focus: Back-End </h3> */}
                    </div>
                </Col>
            </Row>
        {/* <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1961&q=80" max width="26%" className="griffin"></img> */}
            
          
          
        </Hero>
        <br/>
        <br/>
        
        <section id ="portF"></section>
        <hr/>
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
                  <CardBody className="cBody" id="loqalBody">
                    <CardTitle className="projectTitle"></CardTitle>
                    <CardSubtitle className="projectSubTitle">Loqal</CardSubtitle>
                    <CardText>An application which allows the user to discover new music via genre.</CardText>
                    <Button outline color="success" href="https://robertharris95.github.io/RDOProject1/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/robertharris95/RDOProject1" target="_blank" className ="depLink2">Repo</Button>
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
                    <Button outline color="success" href="http://justcoffee.herokuapp.com/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/robinaguilar713/Project02" target="_blank" className ="depLink2">Repo</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <Card >
                  <CardImg top width="20%" src="https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                  <CardBody className="cBody" id="planBod">
                    <CardTitle className="projectTitle">Day Planner</CardTitle>
                    <CardSubtitle className="projectSubTitle"></CardSubtitle>
                    <CardText>An application which allows the user to plan out their day based on each hour, and log the events.</CardText>
                    <Button outline color="success" href="https://ghalileo.github.io/DayPlanner/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/Ghalileo/DayPlanner" target="_blank" className ="depLink2">Repo</Button>
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
                    <Button outline color="success" href="https://morning-chamber-52406.herokuapp.com/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/Ghalileo/Note-Taker" target="_blank" className ="depLink2">Repo</Button>
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
                    <Button outline color="success" href="https://ghalileo.github.io/Weather-Dashboard/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/Ghalileo/Weather-Dashboard" target="_blank" className ="depLink2">Repo</Button>
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
                    <Button outline color="success" href="https://ghalileo.github.io/Password-Generator/" target="_blank" className ="depLink">Deploy</Button>
                    <Button outline color="danger" href="https://github.com/Ghalileo/Password-Generator" target="_blank" className ="depLink2">Repo</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
        </Row>

        
        <br/>

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
            <CardImg src={denver} id="oseDenver"/>
            
          </Col>
          <Col sm="6">
            <h4 id="textAbout">Born in Kano Nigeria, Oseghale Okogbo is an individual who seeks success by embodying the mamba mentality; a state of being in which an individual gives 100% of their ability to try 100% of the time. Throughout my journey on this earth, I have learned that the most valuable thing is not what you achieve, but what you are willing to do in order to secure the bag.</h4>
          </Col>
        </Row>
       
    <br/>
    <br/>
    <hr/>
    <br/>            
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <section id ="experienceA"></section>
    </div>

       
    );
};
export default Home;