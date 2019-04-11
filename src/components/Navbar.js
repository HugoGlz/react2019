import React from 'react';

import logo from '../images/badge-header.svg';

import './styles/Navbar.css';

const Navbar = ( props ) => {
	return (
		
		<div className="Navbar">
			<div className="container-fluid">
				<a href="/" className="Navbar_brand">
					<img className="Navbar_logo" src={logo} alt="logo" />
					<span className="font-weight-light">Jugo</span>
					<span className="font-weight-bold">Conf</span>

				</a>
			</div>
		</div>
		
	)
}

export default Navbar;