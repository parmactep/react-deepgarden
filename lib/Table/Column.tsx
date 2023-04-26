import React from 'react';
import classNames from 'classnames';

type IColumnProps = {
	className: string;
	width: string | number;
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
