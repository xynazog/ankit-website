import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var descriptionOne= this.props.data.descriptionOne;
      var descriptionThree= this.props.data.descriptionThree;
      var interestedfields= this.props.data.interestedfields;
      var company= this.props.data.company;
      var profilepic= "images/"+this.props.data.image;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>
      
      <div className="row banner">
         <div className="banner-text">
            <div className="four columns">
               <img className="profile-pic"  src={profilepic} alt="Ankit Bhagat Profile Pic" />
            </div>
            <div>
               <div>
               <h1 className="headerName">{name}</h1>
               <h3 className="aboutlarge">I'm a <span>{city}</span> based <span>{occupation}</span> {descriptionOne}<a href="https://www.splunk.com"><span>{company}.</span></a><br/>{descriptionThree}<span>{interestedfields}</span>.</h3>
               </div>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
