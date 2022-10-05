import React from 'react';
import classNames from 'classnames';

const Cell = ({
	className,
	children,
	rowKey,
	columnKey,
	data,
	...props
}) => (
	<div
		className={classNames('_Table__Cell', className)}
	>
		{typeof children === 'function' ? children(data, rowKey, columnKey) : children}
	</div>
);

export default Cell;
