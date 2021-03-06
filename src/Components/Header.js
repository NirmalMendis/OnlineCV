import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var github = this.props.data.github;
      var name = this.props.data.title;
      var description= this.props.data.description;
    }

    return (
      <div   className="container">
      <header id="home">


      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <div className ="row offset-1 pull-3 ten column">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={github}  target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
            </div>
            
            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </div>
    );
  }
}

export default Header;
