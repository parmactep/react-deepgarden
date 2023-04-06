import React from 'react';
import classNames from 'classnames';

interface IRowProps {
	className?: string;
}

const Row = ({
	className,
	...props
}: IRowProps) => (
	<div
		className={classNames('_Table__Row', className)}
		{...props}
	/>
);

export default Row;