import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws, faNodeJs, faJs, faNpm } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faShieldAlt,
  faTerminal,
  faBriefcase,
  faProjectDiagram,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              {/* <div className="line-text">
                <h4>Services</h4>
              </div> */}
              <div className="heading">
                <BaffleText
                  text="Experience"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom" >{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end Technologies</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <h4>Back-end Technologies</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h4>Network Security</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faJs} className="solid" />
              </div>
              <h4>JavaScript</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faTerminal} className="solid" />
              </div>
              <h4>Command Line</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>System Recovery</h4>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p> */}
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <div >
        <Container >
        <Col md={3} className="miscIcons">
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                
                icon={faCode}
                value={10000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3} className="miscIcons">
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faProjectDiagram}
                value={30}
                text="Projects"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3} className="miscIcons">
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faLaptop}
                value={10}
                text="Operating Systems"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3} className="miscIcons">
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faBriefcase}
                value={5}
                text="Years"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          
        </Container>
        </div>
      )
    }
  }
}

export default Experience
