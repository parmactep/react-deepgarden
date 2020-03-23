import React from 'react';

import classNames from 'classnames';

import './index.styl';

const statuses = {
	request: '-Request',
	done: '-Done',
};

export default class LoadingBar extends React.Component {
	render() {
		return (
			<div className={classNames('_LoadingBar', statuses[this.props.status])}>
				<span className="_LoadingBar__Progress" />
			</div>
		);
	}
}
