import React from 'react';
import classNames from 'classnames';

interface ITableProps {
	className?: string;
}

const Table = ({
	className,
	...props
}: ITableProps) => (
	<div
		className={classNames('_Table__Table', className)}
		{...props}
	/>
);

export default Table;
