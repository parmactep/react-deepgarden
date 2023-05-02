import React from 'react';

import classNames, { ReactNode } from 'classnames';

const classes: Record<string, string> = {
	error: '-Error',
};

import './index.styl';

export interface IAlertProps {
	type: string;
	className: string;
	children: ReactNode;
}

const Alert = (props: IAlertProps) => (
	<div className={classNames('_Alert', classes[props.type || 'error'], props.className)}>
		{props.children}
	</div>
);

export default Alert;
