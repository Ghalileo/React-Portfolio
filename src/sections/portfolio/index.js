/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './styles.scss'
import { Row, Col, Card } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import Tilt from 'react-tilt'
import ThemeContext from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faNodeJs, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import TouchCarousel from 'react-touch-carousel'
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#7d75eb',
};


  
  
  




class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    const { items, data } = this.props
    this.state = {
      category: null,
      col:
        items.length > 6
          ? 4
          : items.length > 4
          ? 3
          : items.length > 3
          ? 2
          : items.length > 1
          ? 2
          : 1,
      items: this.props.items,
      showPortfolio: false,
    }
    this.showPortfolio = this.showPortfolio.bind(this)
  }
  static contextType = ThemeContext

  showPortfolio() {
    this.setState({ showPortfolio: true })
  }
  

  render() {
   

    const data = [
  
      {
        title: 'Card 1',
        background: '#0072bb',
        text: `react-touch-carousel only handles the trouble parts, i.e.
        - touch gestures parsing
        - scroll cursor rounding and modding
        - items padding and looping
        - auto playing`
      },
      {
        title: 'Card 2',
        background: '#ff4c3b',
        text: `It is left up to you to
        - decide the carousel structure
        - render each item in the carousel
        - style everything
        - add some fancy decorators like dots`
      },
      {
        title: 'Card 3',
        background: '#ffca18',
        text: `Install it by
        - npm install --save react-touch-carousel`
      },
      {
        title: 'Card 4',
        background: '#44c1c1',
        text: `See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by
        - npm install
        - npm run dev
        - open localhost:5000`
      },
      {
        title: 'Card 5',
        background: '#29c53c',
        text: 'react-touch-carousel is released under MIT license'
      }
    ]

    function renderCard (index, modIndex, cursor) {
      const item = data[modIndex]
      // render the item
    } 

    function CarouselContainer (props) {
      // render the carousel structure<Carousel effect="fade">
      
      return (
        <Carousel effect="fade" autoplay="true" id="mobileCardBody">
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">Zoriliz</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
                A Personal React portfolio.  Hosted via netlify.
                  <Row>
                    <Col className="appDeployColMobile"><a href="http://www.zoriliz.com" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://github.com/Ghalileo/Zoriliz-Portfolio" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        
        </div>
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">AMPR-Showroom</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
              An Ecommerce website hosted via shopify.
                  <Row>
                    <Col className="appDeployColMobile"><a href="https://www.amprshowroom.com/" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://www.shopify.com/" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        </div>
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">Loqal</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
              Application built using API Integration to help users discover new music
                  <Row>
                    <Col className="appDeployColMobile"><a href="https://robertharris95.github.io/RDOProject1/" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://github.com/robertharris95/RDOProject1" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        </div>
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">Pass Generator</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
              An application which allows users to generate a random password.
                  <Row>
                    <Col className="appDeployColMobile"><a href="https://ghalileo.github.io/Password-Generator/" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://github.com/Ghalileo/Password-Generator" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        </div>
        
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">Team Profile Generator</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
              An app which allows the user to create a team based on role.
                  <Row>
                    <Col className="appDeployColMobile"><a href="https://github.com/Ghalileo/Team-Profile-Generator" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://github.com/Ghalileo/Team-Profile-Generator" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        </div>
        <div>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header className="mobilePortHeader">Oya Abeo</Card.Header>
            <Card.Body >
              <Card.Text className="mobileCardDescription">
              An Ecommerce website hosted via shopify.
                  <Row>
                    <Col className="appDeployColMobile"><a href="http://www.oyaabeo.com" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
                    <Col className="appRepoColMobile"><a href="https://shopify.com" target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
                  </Row>
              </Card.Text>
      
            </Card.Body>
        </Card>
        </div>
      </Carousel>
      )
        
    
    }
    return (
      
      <section
        id={`${this.props.id}`}
        className="portfolio"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Portfolio"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.showPortfolio}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="recent-works">
            <div className="portfolio_selector">
              <button
                className="portfolio_category"
                onClick={() => this.changeCategory(null)}
              >
                <span className={`${!this.state.category ? 'active' : ''}`}>
                  All
                </span>
              </button>
              {this.categories()}
            </div>

            <div className="content">
              <div
                className="portfolio_container"
                style={{
                  maxHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.8
                      : 'inherit',
                }}
              >
                {this.items()}
              </div>
            </div>
            {/* Content for mobile layout */}
            <div className="mobileContent">
            <TouchCarousel
              component={CarouselContainer}
              cardCount={this.state.items}
              cardSize={375}
              renderCard={renderCard}
              loop
              autoplay={3000}
>{this.items()}
</TouchCarousel>
            </div>
          </Col>
        </Row>
      </section>
    )
  }

  items() {
    if (this.state.showPortfolio || this.context.height === 'auto') {
      const { items } = this.state
      return items.map((value, index) => {
        if (
          value.content.frontmatter.category === this.state.category ||
          !this.state.category
        ) {
          if (value.content.frontmatter.image) {
            return (
              <div
                className="portfolio_item"
                style={{
                  width:
                    this.context.height === 'auto'
                      ? '100%'
                      : this.state.col === 4
                      ? '25%'
                      : this.state.col === 3
                      ? '33.3%'
                      : this.state.col === 2
                      ? '50%'
                      : '100%',
                }}
                key={index}
              >
                <AnimationContainer delay={200} animation="fadeIn" key={index}>
                  <img
                    src={
                      value.content.frontmatter.image.childImageSharp.fluid.src
                    }
                    alt={value.content.frontmatter.title}
                    style={{
                      maxHeight: `${this.context.height *
                        (this.state.col >= 3
                          ? 0.35
                          : this.getItemCount(
                              value.content.frontmatter.category
                            ) === 4
                          ? 0.36
                          : 1)}px`,
                          border: "solid"
                    }}
                    className="displayPortfolioApp"
                  />
                  
                  <Tilt className="Tilt" options={{ scale: 1, max: 50 }}>
                    
                    <div className="overlay">
                      {/* <span className="title">
                      <a href ={value.content.frontmatter.deploy} target="_blank">{value.content.frontmatter.title}</a>
                      </span> */}
                    {/* <h4>{value.content.frontmatter.title}</h4>
                    <br/>
                    <a href={value.content.frontmatter.deploy} target="_blank" rel="noopener noreferrer"><div className=" deployIcon"><FontAwesomeIcon icon={faRocket} /></div></a>
                    <a href={value.content.frontmatter.repo} target="_blank" rel="noopener noreferrer"><div className=" repoIcon fa-2x"><FontAwesomeIcon icon={faGithubSquare } size={64} /></div></a> */}
                    <Card border="primary" style={{ width: '18rem', height: '14rem' }}>
    
    <Card.Header className="cardHeader">{value.content.frontmatter.title}</Card.Header>
    <Card.Body>
      <Row>
        <Card.Text className="appDescription">
        {value.content.frontmatter.description}  
        </Card.Text>
      </Row>
      
      <Row>
        <Col className="appDeployCol"><a href={value.content.frontmatter.deploy} target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="deployIcon" icon={faRocket} size='2x' /></a></Col>
        <Col className="appRepoCol"><a href={value.content.frontmatter.repo} target="_blank" rel="noopener norferrer"><FontAwesomeIcon id="repoIcon"icon={faGitSquare} size='2x' /></a></Col>
      </Row>
      
      <div className="appIconTools"></div>
    </Card.Body>
  </Card>  
                    </div>    
                                    
                  </Tilt>
                  
                </AnimationContainer>
              </div>
            )
          }
        }
        return false
      })
    }
  }

  getItemCount(category) {
    let total = 0
    this.state.items.forEach(v => {
      if (v.content.frontmatter.category === category || !category) total++
    })
    return total
  }

  changeCategory(category) {
    const { items } = this.props
    this.setState({ items: [] })
    let total = 0
    items.forEach(v => {
      if (v.content.frontmatter.category === category || !category) total++
    })
    let col = total > 6 ? 4 : total > 4 ? 3 : total > 3 ? 2 : total > 1 ? 2 : 1

    this.setState({ category: category, col: col })
    setTimeout(() => {
      this.setState({ items: items })
    }, 50)
  }

  categories() {
    const { items } = this.props
    let categories = []
    for (var v of items) {
      categories.push(v.content.frontmatter.category)
    }
    categories = [...new Set(categories)]
    return categories.map((value, index) => {
      return (
        <button
          className="portfolio_category"
          onClick={() => this.changeCategory(value)}
          key={index}
        > 
          <span className={`${this.state.category === value ? 'active' : ''}`}>
            {value}
          </span>
        </button>
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
          query {
            items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, 
            # The layout is built for 6 portfolio items #
            limit: 6) {
              edges {
                content: node {
                  html
                  frontmatter {
                    id
                    title
                    category
                    repo
                    deploy
                    description
                    
                    image {
                      childImageSharp {
                        fluid(maxWidth: 2000, maxHeight: 2000) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }      
        `}
    render={({ items }) => <Portfolio items={items.edges} {...props} />}
  />
)
