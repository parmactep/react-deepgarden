import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './index.native.styl';

export interface IPreloaderProps {}

function Preloader({ }: IPreloaderProps) {
	return (
		<View className={styles.Wrapper}>
			<ActivityIndicator style={styles.Activity} />
		</View>
	);
}

export default Preloader;
