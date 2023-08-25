import React, { ReactNode } from 'react';

import withClassName from '../../hoc/withClassName';

export interface IToastProps {
	className?: string;
	title: string;
	message: ReactNode;
}

export default withClassName('_Toast')(
	({ className, title, message }: IToastProps) => (
		<div className={className}>
			{!!title && (
				<div className="_Toast__Title">
					{title}
				</div>
			)}
			{!!message && (
				<div className="_Toast__Message">
					{message}
				</div>
			)}
		</div>
	),
);

import './index.styl';
