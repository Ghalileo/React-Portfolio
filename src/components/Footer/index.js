import React from "react";
import { Button } from 'reactstrap';
import "./style.css";

function Footer() {
  return (
    
    <footer className="footer">
      <span>
      <Button outline color="warning" className="experienceButton" href="https://www.linkedin.com/in/oseokogbo/" target="_blank">LinkedIn</Button>
      <Button outline color="warning" className="experienceButton" href="https://drive.google.com/open?id=1bosvyzSrq8X4iUWzoNfenHxHlAkgdyGP" target="_blank">Resume</Button>
      <Button outline color="warning" className="experienceButton" href="https://github.com/Ghalileo" target="_blank">GitHub</Button>
      </span>
      
    </footer>
  );
}

export default Footer;