import React from 'react';

import classNames from 'classnames';

const classes = {
	error: '-Error',
};

import './index.styl';

const Alert = (props) => {
	return (
		<div className={classNames('_Alert', classes[props.type || 'error'], props.className)}>
			{props.children}
		</div>
	);
};

export default Alert;
