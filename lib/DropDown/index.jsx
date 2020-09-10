import React from 'react';

import classNames from 'classnames';

import OnClickOutside from '../../hoc/OutsideClick';
import { portal } from '../../hoc/portal';

const DIRECTION_CLASS = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
};

export default function DropDown({ ...props }) {
	const _dropDown = React.createRef();
	return (
		<>
			<div className="_DropDown__Point" ref={_dropDown} />
			<DropDownBody {...props} dropDownPoint={_dropDown} />
		</>
	);
}

@portal({ className: '_DropDown' })
class DropDownBody extends React.Component {
	static defaultProps = {
		direction: 'bottom',
	};
	state = {
		coordinats: null,
	}
	componentDidMount() {
		this.setState({
			coordinats: this.props.dropDownPoint.current.getBoundingClientRect(),
		});
	}
	handleClickOutside = (e) => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		const top = (this.state.coordinats?.top + (this.props.marginTop || 0)) || 0;
		const left = (this.state.coordinats?.left + (this.props.marginLeft || 0)) || 0;
		return (
			<div
				className={classNames('_DropDown__Body', `_DropDown__Body--${DIRECTION_CLASS[this.props.direction]}`, this.props.className)}
				style={{ top, left }}
			>
				<OnClickOutside onClickOutside={this.handleClickOutside}>
					<div className="_DropDown__Body--Children">
						{this.props.children}
					</div>
				</OnClickOutside>
			</div>
		);
	}
}

import './index.styl';
