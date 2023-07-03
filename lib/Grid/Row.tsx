import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface IRowProps {
	className?: string;
	children?: ReactNode;
}

export default ({ className, children }: IRowProps) => (
	<div className={classNames('_Grid__Row', className)}>
		{children}
	</div>
);