import React, { ReactNode } from 'react';

import withClassName from '../../hoc/withClassName';

export interface IBadgeProps {
	className?: string;
	children: ReactNode;
}

function Badge({ className = '', children }: IBadgeProps) {
	return (
		<div className={className}>
			{children}
		</div>
	);
}

import './index.styl';

export default withClassName('_Badge')(Badge);
