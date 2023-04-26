import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ICellProps {
	className?: string;
	children: ReactNode;
	rowKey: number;
	columnKey: number;
	data: any,
	render?: (renderCell: () => ReactNode) => ReactNode,
}

export default function Cell({
	className,
	children,
	rowKey,
	columnKey,
	data,
	render,
}: ICellProps) {
	const renderCell = () => (typeof children === 'function'
		? children(data, rowKey, columnKey)
		: children);

	return (
		<div
			className={classNames('_Table__Cell', className)}
		>
			{render
				? render(renderCell)
				: renderCell()}
		</div>
	);
}
