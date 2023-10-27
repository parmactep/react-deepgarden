import React, { ReactNode } from 'react';

import withClassName from '../../hoc/withClassName';

import { View, Text } from 'react-native';

import styles from './index.native.styl';

export interface IBadgeProps {
	className?: string;
	children: ReactNode;
	style?: string;
}

function Badge({ ...props }: IBadgeProps) {
	let styleName = props?.style;
	if (styleName) {
		let str = styleName.split(" ");
		styleName = str[1] ? str[1] : str[0];
	}
	return (
		<View style={[styles._Badge,styles[`${styleName}`]]}>
			<Text style={styles.text}>
				{props.children}
			</Text>
		</View>
	);
}

export default withClassName('_Badge')(Badge);
