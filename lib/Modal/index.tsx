import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { portal } from '../../hoc/portal';
import OutsideClick from '../../hoc/OutsideClick';

import { CloseIcon } from '../../assets/icons';

export interface IModalProps {
	onClose?: () => void;
	header?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	className?: string;
	closeButton?: boolean;
	closeOnClickOutside?: boolean;
}

function Modal({
	header,
	footer,
	children,
	onClose = () => {},
	className,
	closeButton = false,
	closeOnClickOutside = false,
}: IModalProps) {

	const handleClickOutside = () => {
		!!closeOnClickOutside && onClose();
	};

	return (
		<OutsideClick
			onClickOutside={handleClickOutside}
			className={classNames('_Modal', className)}
		>
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
		</OutsideClick>
	);
}

export default portal({ className: '_Modal__Overlay' })(Modal);

import './index.styl';
