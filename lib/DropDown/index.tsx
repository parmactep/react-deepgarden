import React from 'react';

import classNames from 'classnames';

import OnClickOutside from '../../hoc/OutsideClick';

const DIRECTION_CLASS: Record<string, string> = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
	left_top: 'LeftTop',
};
interface IDropDownProps {
	direction?: string;
	className?: string;
	onClose: (e: Event) => void;
}
export default class DropDown extends React.Component<IDropDownProps> {
	static defaultProps = {
		direction: 'bottom',
		className: '',
	};
	handleClickOutside = (e: Event) => {
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
