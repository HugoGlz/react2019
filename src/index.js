import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//import Badge from './components/Badge';
import BadgePage from './pages/BadgePage';

const element = (
	<div>
		<h1>Hi, this is Hugo</h1>
		<h2>Soy developer</h2>
	</div>
)


ReactDOM.render(
	<BadgePage /> , document.getElementById('root'));
	
	
/*
	
					<Badge 
							firstName="Hugo" 
							lastName="Gonzalez"
							jobTitle="Java Sr Developer"
							twitter="lulu"
							avatarUrl="https://gravatar.com/avatar?id=identicon"
					/>,
	*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
