import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface IColumnProps {
	className?: string;
	children?: ReactNode | ((data: any, rowKey: number, columnKey: number) => ReactNode); // eslint-disable-line react/no-unused-prop-types
	width?: number;
	title?: ReactNode;
	summary?: ReactNode; // eslint-disable-line react/no-unused-prop-types
}

function Column({ width, title, className }: IColumnProps) {
	return (
		<div
			className={classNames('_Table__Column', className)}
			style={width && { width }}
		>
			{title}
		</div>
	);
}

Column.displayName = 'Table.Column';

export default Column;
