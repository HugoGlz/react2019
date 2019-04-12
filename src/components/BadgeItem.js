import React from 'react';

const BadgeItem = ( props ) => {
	return (
		
		<li key={props.item.id}>
			<p>{props.item.firstName}</p>
		</li>
		
	)
}

export default BadgeItem;