import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';



const SocialMedia = () => (
  <div className="app__social">
    <div><a href="https://twitter.com/isaac_tarib">
    <BsTwitter />
      
    </a>
      
    </div>
    <div>
      <a href="https://www.linkedin.com/in/taribi-isaac-7142581b5/">
      <BsLinkedin />
      </a>
      
    </div>
    <div>
      <a href="https://instagram.com/taribiisaac?igshid=YmMyMTA2M2Y=">
      <BsInstagram />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;