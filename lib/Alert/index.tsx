import React, { ReactNode } from 'react';

import classNames from 'classnames';

const classes: Record<string, string> = {
	error: '-Error',
};

export interface IAlertProps {
	type: string;
	className: string;
	children: ReactNode;
}

function Alert({ type, className, children }: IAlertProps) {
	return (
		<div className={classNames('_Alert', classes[type || 'error'], className)}>
			{children}
		</div>
	);
}

import './index.styl';

export default Alert;
