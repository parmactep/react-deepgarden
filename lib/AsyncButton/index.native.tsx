import React from 'react';
import { View } from 'react-native';

import styles from './index.native.styl';

import Button, { IButtonProps } from '../Button/index.native';

export interface IAsyncButtonProps extends IButtonProps {
	pending?: boolean;
	onPress?: () => void;
}

function AsyncButton({ onPress, pending, ...props }: IAsyncButtonProps) {

	return (
		<View
			style={styles.wrapper}
		>
			<Button
				onPress={pending ? () => {}
				: onPress}
				pending
				{...props}
			/>
		</View>
	);
}

export default AsyncButton;