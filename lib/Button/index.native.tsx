import React, { ReactNode, SyntheticEvent } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

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
	type?: 'button' | 'submit' | 'reset'
}

function Button({ disabled, onPress, ...props }: IButtonProps) {

	const handlePress = () => {
		if (disabled || !onPress) {
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
				<Text style={styles.text}>
					{props.children}
				</Text>
			</View>
		</TouchableHighlight>
	);
}

export default withClassName('_Button')(Button);
