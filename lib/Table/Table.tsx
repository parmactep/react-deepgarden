import React from 'react';
import classNames from 'classnames';

interface ITableProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

function Table({
	className,
	...props
}: ITableProps) {
	return (
		<div
			className={classNames('_Table__Table', className)}
			{...props}
		/>
	);
}

export default Table;
