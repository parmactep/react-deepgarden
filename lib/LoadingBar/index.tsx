import React from 'react';

import classNames from 'classnames';

import './index.styl';

const statuses: Record<string, string> = {
	request: '-Request',
	done: '-Done',
};

export interface ILoadingBarProps {
	status: keyof typeof statuses;
}

export default ({ status }: ILoadingBarProps) => (
	<div className={classNames('_LoadingBar', statuses[status])}>
		<span className="_LoadingBar__Progress" />
	</div>
);
