import React from 'react';

import classNames from 'classnames';

import OnClickOutside from '../../hoc/OnClickOutside';

const DIRECTION_CLASS = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
};

export default class DropDown extends React.Component {
	static defaultProps = {
		direction: 'bottom',
	};
	handleClickOutside = (e) => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		return (
			<div className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[this.props.direction]}`, this.props.className)}>
				<OnClickOutside onClickOutside={this.handleClickOutside}>
					<div className="_DropDown__Body">
						{this.props.children}
					</div>
				</OnClickOutside>
			</div>
		);
	}
}

import './index.styl';
