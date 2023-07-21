import React, {
	ReactNode,
	FunctionComponent,
	isValidElement,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
	ForwardedRef,
} from 'react';
import classNames from 'classnames';

import Body from './Table';
import Column, { IColumnProps } from './Column';
import Cell from './Cell';
import Row from './Row';

import './index.styl';

interface ITableProps {
	className?: string;
	children?: ReactNode;
	data?: any[];
	renderCell?: () => ReactNode;
	onRowClick?: (rowData: any) => void;
}

interface ITable extends ForwardRefExoticComponent<ITableProps & RefAttributes<HTMLDivElement>> {
	Cell: typeof Cell;
	Row: typeof Row;
	Body: typeof Body;
	Column: typeof Column;
}

function Table({
	className,
	children,
	data = [],
	renderCell,
	onRowClick,
}: ITableProps, ref: ForwardedRef<HTMLDivElement>) {
	const columns: IColumnProps[] = [];
	const nonColumnsChildren: ReactNode[] = [];
	React.Children.forEach(
		children,
		(child: ReactNode) => {
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

	const renderRow = (rowData: any, rowKey: number) => (
		<div
			className="_Table__Row"
			key={rowKey}
			onClick={() => onRowClick && onRowClick(rowData)}
			data-key={rowKey}
		>
			{columns.map((column, columnKey) => (
				<Cell
					{...column}
					rowKey={rowKey}
					columnKey={columnKey}
					key={columnKey}
					data={rowData}
					render={renderCell}
				/>
			))}
		</div>
	);

	return (
		<div className={classNames('_Table', className)} ref={ref}>
			<div className="_Table__Table">
				<div className="_Table__Header">
					{columns.map((column, key) => (
						<Column key={key} {...column} />
					))}
				</div>
				<div className="_Table__Body">
					{data.map(renderRow)}
					{columns.some((column) => !!column.summary) && (
						<div className="_Table__Row _Table__Row--Summary">
							{columns.map((column, columnKey) => (
								<div className="_Table__Cell" key={columnKey}>
									{column.summary}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			{nonColumnsChildren}
		</div>
	);
}

const Compounded = forwardRef(Table) as ITable;

Compounded.Column = Column;
Compounded.Body = Body;
Compounded.Row = Row;
Compounded.Cell = Cell;

export default Compounded;
