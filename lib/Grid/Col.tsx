import React from 'react';
import classNames from 'classnames';

const alignClasses: Record<string, string> = {
	start: '_Grid__Col--AlignStart',
	end: '_Grid__Col--AlignEnd',
	center: '_Grid__Col--AlignCenter',
};

interface IColProps {
	className: string;
	col: string;
	offset: string;
	align: 'start' | 'end' | 'center';
	children: React.ReactNode;
}

export default (props: IColProps) => {
	const colClass = props.col ? `_Grid__Col--${props.col}` : '';
	const offsetClass = props.offset ? `'_Grid__Col--Offset' ${props.offset}` : '';
	const alignClass = props.align ? alignClasses[props.align] : '';

	return (
		<div className={classNames('_Grid__Col', colClass, offsetClass, alignClass, props.className)}>
			{props.children}
		</div>
	);
};
