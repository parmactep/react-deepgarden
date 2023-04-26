import React from 'react';

import withClassName from '../../hoc/withClassName';

interface IToastProps {
	className: string;
	title: string;
	message: React.ReactNode;
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
