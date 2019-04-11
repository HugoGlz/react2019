import React, { Component } from 'react';

import logo from '../images/badge-header.svg'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/Badge.css';

class Badge extends Component { 

	render() {
		
		return (
			<div className="badge">
				<div className="badge_header">
					<img 
						src={logo}
						alt="Logo"
				 	/>
				</div>
				
				<div className="badge_section-name">
					<img className="badge_avatar" src={this.props.avatarUrl} alt="Avatar" />
					<h1> {this.props.firstName} <br /> {this.props.lastName} </h1>
				</div>
			
				<div className="badge_section-info">
					<p>{this.props.jobTitle}</p>
					<p>@{this.props.twitter}</p>
				</div>
			
				<div className="badge_footer">
					#jugoconf
				</div>
			</div>
		)
		
		
	}

}

export default Badge;