import React, { ReactNode } from 'react';

import classNames from 'classnames';

import OnClickOutside from '../../hoc/OutsideClick';

const DIRECTION_CLASS: Record<string, string> = {
	top: 'Top',
	bottom: 'Bottom',
	left_bottom: 'LeftBottom',
	left_top: 'LeftTop',
}


export interface IDropDownProps {
	direction?:  keyof typeof DIRECTION_CLASS;
	className?: string;
	onClose?: (e: Event) => void;
	children?: ReactNode;
}

function DropDown({
	direction = 'bottom',
	className = '',
	onClose,
	children
}: IDropDownProps) {
	const handleClickOutside = (e: Event) => {
		onClose && onClose(e);
	};

	return (
		<OnClickOutside
			className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[direction]}`, className)}
			onClickOutside={handleClickOutside}
		>
			<div className="_DropDown__Body">
				{children}
			</div>
		</OnClickOutside>
	);
}

export default DropDown;

import './index.styl';
