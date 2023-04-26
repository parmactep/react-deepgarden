import React from 'react';

import classNames from 'classnames';

import './index.styl';

interface IGroupProps {
	className?: string;
	children: React.ReactNode;
}

export default (props: IGroupProps) => (
	<div className={classNames('_Group', props.className)}>
		{props.children}
	</div>
);
