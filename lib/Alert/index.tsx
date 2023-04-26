import React from 'react';

import classNames from 'classnames';

const classes: Record<string, string> = {
	error: '-Error',
};

import './index.styl';

interface IAlertProps {
	type: string;
	className: string;
	children: React.ReactNode;
}

const Alert = (props: IAlertProps) => (
	<div className={classNames('_Alert', classes[props.type || 'error'], props.className)}>
		{props.children}
	</div>
);

export default Alert;
