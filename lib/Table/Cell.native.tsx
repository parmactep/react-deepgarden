import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './index.native.styl';

export interface ICellProps {
	children?: ReactNode | ((data: any, rowKey: number, columnKey: number) => ReactNode);
	rowKey: number;
	columnKey: number;
	data: any,
	render?: (renderCell: () => ReactNode) => ReactNode,
}

export default function Cell({
	children,
	rowKey,
	columnKey,
	data,
	render,
}: ICellProps) {
	const renderCell = () => (
		typeof children === 'function'
			? children(data, rowKey, columnKey)
			: children
	);

	return (
		<View style={styles.table_cell}>
			{render
				? render(renderCell)
				: renderCell()}
		</View>
	);
}