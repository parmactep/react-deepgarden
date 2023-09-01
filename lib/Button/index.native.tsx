import React, { ReactNode, SyntheticEvent } from 'react';
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native';

import withClassName from '../../hoc/withClassName';

import styles from './index.native.styl';

export interface IButtonProps {
	_ghost?: boolean;
	href?: string;
	disabled?: boolean;
	onPress?: () => void;
	className?: string;
	children?: ReactNode;
	_size?: string;
	type?: 'button' | 'submit' | 'reset';
	pending?: boolean;
}

function Button({ disabled, onPress, pending, ...props }: IButtonProps) {

	const handlePress = () => {
		if (disabled || !onPress || pending) {
			return;
		}
		onPress();
	}

	return (
		<TouchableHighlight
			onPress={handlePress}
			{...props}
		>
			<View
				style={styles.wrapper}
			>
				{pending && <ActivityIndicator color="#FFF" style={styles.Activity} />}
				<Text style={styles.text}>
					{props.children}
				</Text>
			</View>
		</TouchableHighlight>
	);
}

export default withClassName('_Button')(Button);
