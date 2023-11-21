import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './index.native.styl';

export interface GroupProps {
	children?: ReactNode;
}

function Group ({ ...props }: GroupProps) {
	return (
		<View style={styles._Group}>
			{props.children}
		</View>
	)
};

export default Group;
