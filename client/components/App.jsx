import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

export default class App extends Component {
  	render(){
        return (
        	<div>
        		<nav className="navbar navbar-inverse navbar-fixed-top">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">BookMyShow</a>
			        </div>
			        <div id="navbar" className="navbar-collapse collapse">
			          <ul className="nav navbar-nav">
	        			<li><Link to="/home">Home</Link></li>
	        			<li><Link to="/event">Events</Link></li>
		                <li><Link to="/about">About Us</Link></li>
	        			<li><Link to="/contact">Contact Us</Link></li>
			          </ul>
			        </div>
			      </div>
			    </nav>
        		<div>
        			{this.props.children}
        		</div>
        	</div>
        );
    }
}
