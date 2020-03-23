import React from 'react';
import classNames from 'classnames';

const Row = ({
	className,
	...props
}) => (
	<div
		className={classNames('_Table__Row', className)}
		{...props}
	/>
);

export default Row;
