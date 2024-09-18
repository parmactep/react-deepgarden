import React, { ReactNode, SyntheticEvent } from 'react';
import { Pressable, View, Text, ActivityIndicator } from 'react-native';

import withClassName from '../../hoc/withClassName';

import styles from './index.native.styl';

export interface IButtonProps {
	_ghost?: boolean;
	href?: string;
	disabled?: boolean;
	onPress?: () => void;
	className?: string;
	children?: string;
	_size?: string;
	type?: 'button' | 'submit' | 'reset';
	pending?: boolean;
}

function Button({
	disabled,
	onPress,
	pending,
	className,
	children,
}: IButtonProps) {

	const handlePress = () => {
		if (disabled || !onPress || pending) {
			return;
		}
		onPress();
	}

	return (
		<Pressable
			onPress={handlePress}
		>
			<View
				className={{...styles.Wrapper, ...className}}
			>
				{pending && <ActivityIndicator color="#FFF" className={styles.Activity} />}
				<Text className={styles.Text}>
					{children}
				</Text>
			</View>
		</Pressable>
	);
}

export default withClassName('_Button')(Button);
