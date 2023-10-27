import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './index.native.styl';

export interface IRowProps {
	className?: string;
	children?: ReactNode;
}

export default function Row({ ...props }) {
	return (
		<View style={styles._Grid__Row}>
			{props.children}
		</View>
	);
}
