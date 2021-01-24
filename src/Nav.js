import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav(){
  const [show, handleShow] = useState(false);
  function scrollSpy() {
	if(window.scrollY > 100){
	  handleShow(true);
	}else handleShow(false);
  }
  useEffect(() => {
      window.addEventListener("scroll", scrollSpy);
      return () => {
        window.removeEventListener("scroll", scrollSpy);
      };
    }, []);
  return (<div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"
        alt="Netflix Logo"
      />
    </div>
  )
}
export default Nav;
