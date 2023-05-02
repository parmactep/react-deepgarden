import React, { FC } from 'react';
import classNames from 'classnames';
import './index.styl';

interface GroupProps {
	className?: string;
}

const Group: FC<GroupProps> = ({ className, children }) => (
	<div className={classNames('_Group', className)}>
		{children}
	</div>
);

export default Group;