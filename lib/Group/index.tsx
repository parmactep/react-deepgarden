import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './index.styl';

export interface GroupProps {
	className?: string;
	children?: ReactNode;
}

function Group ({ className, children }: GroupProps) {
	return (
		<div className={classNames('_Group', className)}>
			{children}
		</div>
	)
};

export default Group;