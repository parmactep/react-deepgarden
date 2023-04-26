import React from 'react';

import classNames from 'classnames';

import './index.styl';

const statuses: Record<string, string> = {
	request: '-Request',
	done: '-Done',
};

interface ILoadingBarProps {
	status: string;
}

export default (props: ILoadingBarProps) => (
	<div className={classNames('_LoadingBar', statuses[props.status])}>
		<span className="_LoadingBar__Progress" />
	</div>
);
