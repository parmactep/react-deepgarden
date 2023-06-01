import React, { ReactNode, MutableRefObject } from 'react';

import classNames from 'classnames';

import OutsideClick from '../../hoc/OutsideClick';
import { portal } from '../../hoc/portal';

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

const DropDown = React.forwardRef(({
	direction =  'bottom',
	className,
	children,
	onClose,
}: IDropDownProps, ref: MutableRefObject<HTMLElement>) => {
	const handleClickOutside = (e: Event) => {
		onClose && onClose(e);
	};

	let rect = ref.current?.getBoundingClientRect();
	const style = {
		top: `${rect.bottom}px`,
		left: `${rect.left + (rect.width / 2)}px`,
	}

	return (
		<OutsideClick
			className={classNames('_DropDown', `_DropDown--${DIRECTION_CLASS[direction]}`, className)}
			onClickOutside={handleClickOutside}
			style={style}
		>
			<div className="_DropDown__Body">
				{children}
			</div>
		</OutsideClick>
	);
});

export default portal({ className: '_DropDown__Overlay' })(DropDown);

import './index.styl';
