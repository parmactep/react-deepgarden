import React from 'react';

import withClassName from '../../hoc/withClassName';

type IBadgeProps = {
	className: string;
	children: React.ReactNode;
}


const Badge = (props: IBadgeProps) => (
	<div className={props.className}>
		{props.children}
	</div>
);

export default withClassName('_Badge')(Badge);

import './index.styl';
