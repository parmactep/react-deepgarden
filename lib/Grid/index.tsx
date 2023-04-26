import React from 'react';
import classNames from 'classnames';

import Row from './Row';
import Col from './Col';

import './index.styl';

interface IGridProps {
	className: string;
	noHidden: boolean;
	children: React.ReactNode;
}

const Grid = (props: IGridProps) => (
	<div className={classNames('_Grid', props.className, { '_Grid--noHidden': props.noHidden })}>
		{props.children}
	</div>
);

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
