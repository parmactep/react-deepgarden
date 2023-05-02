import React from 'react';

import classNames from 'classnames';

import OnClickOutside from '../../hoc/OutsideClick';

const DIRECTION_CLASS: Record<string, string> = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
	left_top: 'LeftTop',
};

function DropDown() {
	return (
		<OnClickOutside
			className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[this.props.direction]}`, this.props.className)}
			onClickOutside={this.handleClickOutside}
		>
			<div className="_DropDown__Body">
				{this.props.children}
			</div>
		</OnClickOutside>
	);
}

export default DropDown;

import './index.styl';
