import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyFooter from 'react-sticky-footer';
import Wrapper from "./components/Wrapper";
import "./App.css"

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path={["/","/React-Portfolio"]} component={Home} />
          {/* <Footer/> */}
          
        </Wrapper>
        
        <Footer/>
        {/* <Route exact path={["/","/React-Portfolio"]} component={Footer}/> */}
        {/* <Footer><Route exact path={["/","/React-Portfolio"]} component={Home} /></Footer> */}
      </div>
    </Router>
  );
}

export default App;