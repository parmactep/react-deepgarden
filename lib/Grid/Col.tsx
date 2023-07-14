import React, { ReactNode } from 'react';
import classNames from 'classnames';

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
	children,
}: IColProps) {
	const colClass = col ? `_Grid__Col--${col}` : '';
	const offsetClass = offset ? `'_Grid__Col--Offset' ${offset}` : '';
	const alignClass = align ? alignClasses[align] : '';

	return (
		<div className={classNames('_Grid__Col', colClass, offsetClass, alignClass, className)}>
			{children}
		</div>
	);
}
