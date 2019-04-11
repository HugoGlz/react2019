import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';

import Badge from '../components/Badge';

import header from '../images/badge-header.svg'

import './styles/BadgePage.css'

class BadgePage extends Component {
	
	render () {
		return (
			<div>
				<Navbar />
				
				<div className="BadgeNew_hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>
			
				<div className="container">
					<div classNmae="row">
						<div className="col">
							<Badge 
								firstName="Hugo" 
								lastName="Gonzalez"
								jobTitle="Java Sr Developer"
								twitter="lulu"
								avatarUrl="https://gravatar.com/avatar?id=identicon"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}

export default BadgePage;