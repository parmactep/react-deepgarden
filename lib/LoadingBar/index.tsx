import React from 'react';

import classNames from 'classnames';

const statuses: Record<string, string> = {
	request: '-Request',
	done: '-Done',
};

export interface ILoadingBarProps {
	status: keyof typeof statuses;
}

function LoadingBar({ status }: ILoadingBarProps) {
	return (
		<div className={classNames('_LoadingBar', statuses[status])}>
			<span className="_LoadingBar__Progress" />
		</div>
	);
}

import './index.styl';

export default LoadingBar;
