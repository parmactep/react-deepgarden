import React, { ReactNode } from 'react';

import classNames from 'classnames';

import OutsideClick from '../../hoc/OutsideClick';

const DIRECTION_CLASS = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
	left_top: 'LeftTop',
};

interface IDropDownProps {
	direction?: keyof typeof DIRECTION_CLASS;
	className?: string;
	children?: ReactNode;
	onClose?: (e: Event) => void;
}

function DropDown({
	direction = 'bottom',
	className,
	children,
	onClose,
}: IDropDownProps) {
	const handleClickOutside = (e: Event) => {
		onClose && onClose(e);
	};
	return (
		<OutsideClick
			className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[direction]}`, className)}
			onClickOutside={handleClickOutside}
		>
			<div className="_DropDown__Body">
				{children}
			</div>
		</OutsideClick>
	);
}

export default DropDown;

import './index.styl';
