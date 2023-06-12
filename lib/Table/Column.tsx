import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface IColumnProps {
	className?: string;
	children?: ReactNode | ((data: any) => ReactNode);
	width?: number;
	title?: ReactNode;
	summary?: ReactNode;
}

const Column = ({ width, title, className }: IColumnProps) => (
	<div
		className={classNames('_Table__Column', className)}
		style={width && { width }}
	>
		{title}
	</div>
);

Column.displayName = 'Table.Column';

export default Column;
