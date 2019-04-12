import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/badge-header.svg'

import './styles/BadgePage.css'

class BadgePage extends Component {
	
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			twitter: '',
			jobTitle: ''
		}
	}
	
	handleChange = e => {
		console.log({[e.target.name] : e.target.value})
		this.setState({
			form: {
				...this.state.form,
				[e.target.name] : e.target.value
			}
		})
	}
	
	render () {
		return (
			<div>
				<Navbar />
				
				<div className="BadgeNew_hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>
			
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								firstName={this.state.form.firstName} 
								lastName={this.state.form.lastName} 
								jobTitle={this.state.form.jobTitle} 
								twitter={this.state.form.twitter} 
								avatarUrl="https://gravatar.com/avatar?id=identicon"
							/>
						</div>
						<div className="col-6">
							<BadgeForm 
								handleChange={this.handleChange}
								formValues={this.state.form}
								/>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}

export default BadgePage;