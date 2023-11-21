import React, { useState, ReactNode, SyntheticEvent } from 'react';
import styles from './index.native.styl';
import { View, Text, TouchableOpacity } from 'react-native';

export interface ITabProps {
	children: ReactNode;
}

export interface ITabsProps {
	onChange?: (key: number) => void;
	tabs: any[];
	children: ReactNode;
}

function Tab(props: ITabProps) {
	return (
		<View style={styles.Tabs__Tab}>
			{props.children}
		</View>
	);
}

Tab.displayName = 'Tab';

function Tabs({ tabs = [], onChange, children }: ITabsProps) {
	const [active, setActive] = useState(0);

	const handlePress = (e:number) => {
		const key  = e;
		setActive(Number(key));
		onChange && onChange(Number(key));
	}

	const renderControl = (child: any, key: number) => {
		return (
			<TouchableOpacity
			key={key}
			onPress={()=>handlePress(key)}
			>
				<View
				key={key}
				style={styles.Tabs__Title}
				data-key={key}
				>
					<Text style={[key === active && styles.Tabs__Title__Active]}>{child}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.Wrapper}>
			<View style={styles.Tabs__Control}>
				{tabs.map(renderControl)}
			</View>
		</View>
	);
}

Tabs.Tab = Tab;

import './index.styl';

export default Tabs;
