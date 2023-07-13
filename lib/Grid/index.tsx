import React, { ReactNode } from 'react';
import classNames from 'classnames';

import Row from './Row';
import Col from './Col';

import './index.styl';

export interface IGridProps {
	className?: string;
	noHidden?: boolean;
	children?: ReactNode;
}

function Grid({ className, noHidden, children }: IGridProps) {
	return (
		<div className={classNames('_Grid', className, { '_Grid--noHidden': noHidden })}>
			{children}
		</div>
	);
}

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
