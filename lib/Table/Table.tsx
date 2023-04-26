import React from 'react';
import classNames from 'classnames';

type ITableProps = {
	className: string;
	[x: string]: any
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
