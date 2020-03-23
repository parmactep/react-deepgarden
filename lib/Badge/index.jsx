import React from 'react';

import withClassName from '../../hoc/withClassName';

const Badge = (props) => {
	return (
		<div className={props.className}>
			{props.children}
		</div>
	);
};

export default withClassName('_Badge')(Badge);

import './index.styl';
