import React from 'react';
import { View, Text } from 'react-native';
import Cell from './Cell.native';
import styles from './index.native.styl';



function Table({
	...props
}) {
	return (
		<View
			style={styles._Table__Table}
			{...props}
		/>
	);
}

export default Table;
