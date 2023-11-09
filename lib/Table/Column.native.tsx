import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import Cell from './Cell.native';
import styles from './index.native.styl';

export interface IColumnProps {
	children?: ReactNode | ((data: any, rowKey: number, columnKey: number) => ReactNode);
	width?: number | string;
	title?: ReactNode;
	summary?: ReactNode;
}

function Column({ width, title, children, ...props }: IColumnProps) {
	return (
		<View>
			<Text style={styles.table_head_captions}>{title}</Text>
		</View>
	);
}

Column.displayName = 'Table.Column';

export default Column;
