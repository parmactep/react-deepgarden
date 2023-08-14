import React, { ReactNode } from 'react';
import classNames from 'classnames';

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

import './index.styl';

export default Group;
