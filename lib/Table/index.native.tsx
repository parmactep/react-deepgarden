import React, {
	ReactNode,
	FunctionComponent,
	isValidElement,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
	ForwardedRef,
	useRef,
} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './index.native.styl';

import Body from './Table';
import Column, { IColumnProps } from './Column.native';
import Cell from './Cell.native';
import Row from './Row.native';


export interface ITableProps {
	className?: string;
	children?: ReactNode;
	data?: any[];
	renderCell?: (renderCell?: any) => ReactNode;
	onRowClick?: (rowData: any) => void;
}

export interface ITable extends ForwardRefExoticComponent<ITableProps & RefAttributes<HTMLDivElement>> {
	Cell: typeof Cell;
	Row: typeof Row;
	Body: typeof Body;
	Column: typeof Column;
}

const textRef = useRef()

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

	const styles = StyleSheet.create({
		wrapper: {
		  justifyContent: 'center',
		  alignItems: 'center',
		  flex: 1,    
		},
		table_head: {
		  flexDirection: 'row', 
		  borderBottomWidth: 1, 
		  borderColor: '#ddd', 
		  backgroundColor: '#f1f3f7'
	  },
	  
	  table_body_single_row:{
		  backgroundColor: '#fff',
		  flexDirection: 'row', 
		  borderBottomWidth: 1,
		  borderColor: '#ececec', 
	  },
	  table_data:{  
		  fontSize: 11,
	  },
	  table: {
		  justifyContent: 'center',
		  alignItems: 'center',
		  elevation: 1,
		  backgroundColor: '#fff',
	  },
	})

	const renderRow = (rowData: any, rowKey: number) => (
		<View style={styles.table_body_single_row}
			key={rowKey}
			data-key={rowKey}
		>
			{columns.map((column, columnKey) => (
				<View style={{width: "100%", flex:1}}>
					<Cell
					{...column}
					rowKey={rowKey}
					columnKey={columnKey}
					key={columnKey}
					data={rowData}
				/>
				</View>
			))}
		</View>
	);

	return (
		<View style={styles.wrapper} ref={ref}>
           
           {/* Table Container */}
           <View style={styles.table}>
                {/* Table Head */}
                <View style={styles.table_head}>
					{columns.map((column, key) => (
						<View style={{flex: 1}}>
							<Column key={key} {...column} />
						</View>
					))}
                </View>

                {/* Table Body - Single Row */}
				{data.map(renderRow)}

           </View>
		</View>
	);
}

const Compounded = forwardRef(Table) as ITable;

Compounded.Column = Column;
Compounded.Body = Body;
Compounded.Row = Row;
Compounded.Cell = Cell;

export default Compounded;
