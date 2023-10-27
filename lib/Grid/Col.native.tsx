import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './index.native.styl';

const alignClasses = {
	start: '_Grid__Col--AlignStart',
	end: '_Grid__Col--AlignEnd',
	center: '_Grid__Col--AlignCenter',
};

export interface IColProps {
	className?: string;
	col?: number;
	offset?: number;
	align?:	keyof typeof alignClasses;
	children?: ReactNode;
}

export default function Col({
	className,
	col,
	offset,
	align,
	...props
}: IColProps) {
	const colClass = col ? `_Grid__Col__${col}` : '';
	const offsetClass = offset ? `'_Grid__Col__Offset' ${offset}` : '';
	const alignClass = align ? alignClasses[align] : '';

	return (
		<View style={[styles._Grid__Col, styles[`${colClass}`], styles[`${alignClass}`]]}>
			{props.children}
		</View>
	);
}
