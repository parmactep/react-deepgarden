import React, { ReactNode } from 'react';

import withClassName from '../../hoc/withClassName';

export interface IBadgeProps {
	className: string;
	children: ReactNode;
}


const Badge = ({ className,children }: IBadgeProps) => (
	<div className={className}>
		{children}
	</div>
);

export default withClassName('_Badge')(Badge);

import './index.styl';
