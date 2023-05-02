<<<<<<< HEAD
import React from 'react';
=======
import React, { ReactNode } from 'react';
>>>>>>> 6aabdb9b4e6de6b2accaa9fd3bc570c0742c0915
import classNames from 'classnames';

import { portal } from '../../hoc/portal';
import OutsideClick from '../../hoc/OutsideClick';

import { CloseIcon } from '../../assets/icons';

interface IModalProps {
<<<<<<< HEAD
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children?: React.ReactNode;
	onClose: () => void;
=======
	onClose?: () => void;
	header?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
>>>>>>> 6aabdb9b4e6de6b2accaa9fd3bc570c0742c0915
	className?: string;
	closeButton?: boolean;
	closeOnClickOutside?: boolean;
}

<<<<<<< HEAD
// @ts-ignore 	// @TODO: TS
@portal({ className: '_Modal__Overlay' })
class Modal extends React.Component<IModalProps> {
	static defaultProps = {
		onClose: () => {},
	};
	triggerClose = () => {
		this.props.onClose();
	};
	handleClickOutside = () => {
		!!this.props.closeOnClickOutside && this.triggerClose();
	};
	render() {
		return (
			<OutsideClick onClickOutside={this.handleClickOutside}>
				<div className={classNames('_Modal', this.props.className)}>
					{this.props.header
					&& (
						<div className="_Modal__Header">
							{this.props.header}
						</div>
					)}
					<div className="_Modal__Body">
						{this.props.children}
					</div>
					{this.props.footer
					&& (
						<div className="_Modal__Footer">
							{this.props.footer}
						</div>
					)}
					{this.props.closeButton && <CloseIcon className="_Modal__Close" onClick={this.triggerClose} />}
				</div>
			</OutsideClick>
		);
	}
}

export default Modal;
=======
function Modal({
	header,
	footer,
	children,
	onClose,
	className,
	closeButton = false,
	closeOnClickOutside = false,
}: IModalProps) {

	const handleClickOutside = () => {
		!!closeOnClickOutside && onClose();
	};

	return (
		<OutsideClick onClickOutside={handleClickOutside}>
			<div className={classNames('_Modal', className)}>
				{header && (
					<div className="_Modal__Header">
						{header}
					</div>
				)}
				<div className="_Modal__Body">
					{children}
				</div>
				{footer && (
					<div className="_Modal__Footer">
						{footer}
					</div>
				)}
				{closeButton && <CloseIcon className="_Modal__Close" onClick={onClose} />}
			</div>
		</OutsideClick>
	);
}

export default portal({ className: '_Modal__Overlay' })(Modal);
>>>>>>> 6aabdb9b4e6de6b2accaa9fd3bc570c0742c0915

import './index.styl';
