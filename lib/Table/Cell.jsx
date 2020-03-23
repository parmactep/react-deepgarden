import React from 'react';
import classNames from 'classnames';

const Cell = ({
	className,
	...props
}) => (
	<div
		className={classNames('_Table__Cell', className)}
		{...props}
	/>
);

export default Cell;
