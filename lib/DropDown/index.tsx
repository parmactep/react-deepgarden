import React from 'react';

import classNames from 'classnames';

import OutsideClick from '../../hoc/OutsideClick';

const DIRECTION_CLASS: Record<string, string> = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
	left_top: 'LeftTop',
};

function DropDown() {
	return (
		<OutsideClick
			className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[this.props.direction]}`, this.props.className)}
			onClickOutside={this.handleClickOutside}
		>
			<div className="_DropDown__Body">
				{this.props.children}
			</div>
		</OutsideClick>
	);
}

export default DropDown;

import './index.styl';
