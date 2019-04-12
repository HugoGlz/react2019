import React from 'react';

import './styles/BadgeItem.css'

const BadgeItem = ( props ) => {
	return (
		
		<div className="container Badge_Item">
			<div className="row">
				<div className="col-2">
					<img src={props.item.avatarUrl} />
				</div>
				<div className="col-6">
					<p style={{
						marginBottom: 0
					}}>{props.item.firstName} {props.item.lastName}</p>
						<a href={`https://twitter.com/${props.item.twitter}`}> @{ props.item.twitter } </a>
					<p> { props.item.jobTitle } </p>
				</div>
			</div>
		</div>
		
	)
}

export default BadgeItem;