import React from 'react';
import classNames from 'classnames';

export interface ITableProps extends React.HTMLAttributes<HTMLDivElement> {
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
