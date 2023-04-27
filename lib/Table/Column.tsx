import React from 'react';
import classNames from 'classnames';

interface IColumnProps {
	className?: string;
	width?: string | number;
	title?: React.ReactNode;
	children: React.ReactNode;
}

const Column = ({ width, children, className }: IColumnProps) => (
	<div
		className={classNames('_Table__Column', className)}
		style={width && { width }}
	>
		{children}
	</div>
);

Column.displayName = 'Table.Column';

export default Column;
