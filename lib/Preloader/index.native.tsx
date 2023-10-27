import React from 'react';
import styles from './index.native.styl';
import { View, ActivityIndicator } from 'react-native';

export interface IPreloaderProps {
	className?: string;
}

function Preloader({ className }: IPreloaderProps) {
	return (
		<View style={styles._Preloader}> 
			<ActivityIndicator />
		</View>
	);
}

export default Preloader;
