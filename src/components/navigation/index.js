import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faHome, faFistRaised } from '@fortawesome/free-solid-svg-icons'
var scrollToElement = require('scroll-to-element')

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.sections = [
            {
                name: "Home"
            },
            {
                name: "About"
            },
            {
                name: "Experience"
            },
            {
                name: "Portfolio"
            },
            // {
            //     name: "Testimonials"
            // },
            {
                name: "Contact"
            }
        ]
    }

    navScroll(id, v) {
        
        this.setState({show: false})
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
          }).on('end', () => {
            this.props.change(v)
        });
    }


    render() {
        return(
            <div>
                <div className="opener">
                    <FontAwesomeIcon icon={faBars} className="closeNav" onClick={() => this.setState({show: true})} />
                </div>
                <div className={`navigation ${this.state.show ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faTimes} className="closeNav" onClick={() => this.setState({show: false})} />
                    <div className="logo">
                        {/* <img src="img/logo.png" alt="logo"/> */}
                        {/* <h2>Ghalileo</h2> */}
                        {/* <a href="/home" rel="noopener norferrer"><FontAwesomeIcon icon={faFistRaised}/></a> */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                    </div>
                    <div className="links">
                        <ul>
                            {this.items()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    items() {
        return this.sections.map((value, index) => {
            return (
                <li key={index}>
                    <button onClick={() => this.navScroll(value.name.toLowerCase(), index)}>{value.name}</button>
                </li>
            )
        })
    }
}
export default Navigation