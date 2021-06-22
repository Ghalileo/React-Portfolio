import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFistRaised, faFile } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I am currently a FreeLance Web Developer. 
              
              <a href="https://drive.google.com/file/d/1vPMUfFGm0wEBDFCqYCz1SyOmVUFGT5DZ/view?usp=sharing" target="_blank" rel="noopener norferrer" className="resumeIcon"><FontAwesomeIcon icon={faFile}/></a>
          
          </h3>

                            <div className="separator" />
                            <p>Individual oriented in people and a technology expert-in-training. Thrives with integrating technology into
                                others’ lives. Achieved a Bachelors in Integrative Studies focused in Computer Information Systems,
                                Psychology, and Learning Technology with a minor in Spanish from the University of North Texas.
                                Recent graduate from the Rice University Coding Bootcamp, which provided the opportunity to develop
                                multiple applications in order to build the foundations for a career as a Full Stack Web Developer. Fields
                                of proficiency include Project Management, Back-End Development, MERN Stack, Remote settings,
                                collaborative projects, and API routing. Dedicated to achieve a goal once initialized and determined to
                                improve skills through each opportunity.</p>
                            {/* <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com/ghalileo')}/>
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/oseokogbo')} />
                                <FontAwesomeIcon icon={fainstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/ghalileo')} />
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com/chosenOdyssey')} />
                            </div> */}
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                                {/* <h4 className="profHeading">Proficiency Level</h4> */}
                            </div>
                            
                            <div className="skills-container">
                                <Progress name="Web Design" value={90} delay={1100} />
                                <Progress name="Nodejs" value={80} delay={1100} />
                                <Progress name="React" value={85} delay={1100} />
                                <Progress name="Git" value={80} delay={1100} />
                                <Progress name="Command Line" value={90} delay={1100} />
                                <Progress name="Kali Linux" value={75} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero