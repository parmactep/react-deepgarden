import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './index.native.styl';

import Row from './Row';
import Col from './Col';

export interface IGridProps {
	className?: string;
	noHidden?: boolean;
	children?: ReactNode;
}

function Grid({ noHidden , ...props }: IGridProps) {
	return (
		<View style={styles._Grid}>
			{props.children}
		</View>
	);
}

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
