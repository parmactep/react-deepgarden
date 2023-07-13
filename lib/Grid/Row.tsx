import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface IRowProps {
	className?: string;
	children?: ReactNode;
}

export default function ({ className, children }: IRowProps) {
	return (
		<div className={classNames('_Grid__Row', className)}>
			{children}
		</div>
	);
}
