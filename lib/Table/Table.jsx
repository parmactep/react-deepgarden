import React from 'react';
import classNames from 'classnames';

const Table = ({
	className,
	...props
}) => (
	<div
		className={classNames('_Table__Table', className)}
		{...props}
	/>
);

export default Table;
