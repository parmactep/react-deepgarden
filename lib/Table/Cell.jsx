import React from 'react';
import classNames from 'classnames';

export default function Cell({
	className,
	children,
	rowKey,
	columnKey,
	data,
	render,
}) {

	const child = typeof children === 'function' ? children(data, rowKey, columnKey) : children;

	return (
		<div
			className={classNames('_Table__Cell', className)}
		>
			{child}
		</div>
	)
}
