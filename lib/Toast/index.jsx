import React from 'react';

import withClassName from '../../hoc/withClassName';

export default withClassName('_Toast')(
	function Toast({ className, title, message }) {
		return (
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
		);
	},
);

import './index.styl';
