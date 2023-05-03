import React, { ReactNode, FunctionComponent, isValidElement } from 'react';
import classNames from 'classnames';

import Body from './Table';
import Column, { IColumnProps } from './Column';
import Cell from './Cell';
import Row from './Row';

import './index.styl';

export interface ITableProps {
	className?: string;
	children?: ReactNode;
	data?: any[];
	renderCell?: () => ReactNode;
	onRowClick?: (rowData: any) => void;
}

export default function Table({
	className,
	children,
	data = [],
	renderCell,
	onRowClick,
}: ITableProps) {
	let columns: IColumnProps[] = [];
	const nonColumnsChildren: ReactNode[] = [];
	React.Children.forEach(
		children,
		(child) => {
			if (
				child
				&& isValidElement(child)
				&& typeof child.type !== 'string'
				&& (child.type as FunctionComponent).displayName === 'Table.Column'
			) {
				columns[columns.length] = child.props;
			} else {
				nonColumnsChildren[nonColumnsChildren.length] = child;
			}
		},
	);

	const renderRow = (rowData: any, rowKey:  number) => {
		return (
			<div
				className="_Table__Row"
				key={rowKey}
				onClick={(e) => onRowClick && onRowClick(rowData)}
				data-key={rowKey}
			>
				{columns.map((column, columnKey) => {
					return (
						<Cell
							{...column}
							rowKey={rowKey}
							columnKey={columnKey}
							key={columnKey}
							data={rowData}
							render={renderCell}
						/>
					);
				})}
			</div>
		);
	};

	return (
		<div className={classNames('_Table', className)}>
			<div className="_Table__Table">
				<div className="_Table__Header">
					{columns.map((column, key) => (
						<Column key={key} {...column} />
					))}
				</div>
				<div className="_Table__Body">
					{data.map(renderRow)}
					{columns.some(column => !!column.summary) && (
						<div className="_Table__Row _Table__Row--Summary">
							{columns.map((column, columnKey) => {
								return (
									<div className="_Table__Cell" key={columnKey}>
										{column.summary}
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
			{nonColumnsChildren}
		</div>
	);
}

Table.Column = Column;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
