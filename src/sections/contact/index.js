import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import { faFile } from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: false,
            show: false
        }
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext


    show() {
      this.setState({show : true})
    }

    check(val) {
        if (this.state.error && val === "") {
                return false
        } else {
            return true
        }
    }

    submit() {
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
        }
    }
    render() {
        return (
            <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form()}
                    </Col>
                    <Col md={5} className="map">
                        {/* {this.map()} */}
                    </Col>
                </Row>
            </section>
        )
    }

    form() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={0} animation="fadeInUp fast">
                    <form action="https://formspree.io/f/xpzkjdab"
                    method="POST">
                <div className="form-container">
                    <div className="line-text">
                        <h4>Get In Touch</h4>
                        <AnimationContainer delay={50} animation="fadeInUp fast">
                            <div className="form-group">
                                <input type="text" name="name" className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={100} animation="fadeInUp fast">
                        <div className="form-group">
                            <input type="email" name="_replyto" type="text" className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={150} animation="fadeInUp fast">
                            <div className="form-group">
                                <input type="text" name="number" className="phone" placeholder="Phone (Optional)" onChange={e => this.setState({phone: e.target.value})} />
                            </div>
                        </AnimationContainer>
                        
                        <AnimationContainer delay={200} animation="fadeInUp fast">
                        <div className="form-group">
                            <textarea name="message" className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder="Message" onChange={e => this.setState({message: e.target.value})}></textarea>
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={250} animation="fadeInUp fast">
                        <div className="submit">
                            <button type="submit" className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit()}>
                                <span>Send Message</span>
                            </button>
                        </div>
                        </AnimationContainer>
                    </div>
                </div>
                </form>
                {/* <iframe className="contactForm" title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLScWcKpc9A36amBN-wZ69FNBOo9qBmgwYV0Tf6-MUHHV39d9QA/viewform?embedded=true" width="1040" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </AnimationContainer>
            )
        }
    }

    map() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={100} animation="fadeIn fast" height="4in">
                    <iframe title="map" width="50%" height="50%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
                </AnimationContainer>
            )
        }
    }

}

export default Contact