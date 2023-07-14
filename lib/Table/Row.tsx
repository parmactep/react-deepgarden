import React from 'react';
import classNames from 'classnames';

interface IRowProps {
	className?: string;
}

function Row({
	className,
	...props
}: IRowProps) {
	return (
		<div
			className={classNames('_Table__Row', className)}
			{...props}
		/>
	);
}

export default Row;
