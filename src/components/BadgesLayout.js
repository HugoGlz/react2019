import React from 'react';

import BadgeItem from './BadgeItem';

const BadgeLayout = ( props ) => {
	return (
		
		<div className="Badges__list">
			<div className="Badges__container">
				{ 
					props.badges.map ( item => <BadgeItem item={item} key={item.id}/> ) 
				}
			</div>
		</div>
		
	)
}

export default BadgeLayout;