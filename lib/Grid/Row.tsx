import React from 'react';
import classNames from 'classnames';

interface IRowProps {
	className?: string;
	children: React.ReactNode;
}

export default ({ className, children }: IRowProps) => (
	<div className={classNames('_Grid__Row', className)}>
		{children}
	</div>
);
