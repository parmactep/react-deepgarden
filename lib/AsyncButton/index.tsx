import React from 'react';
import classNames from 'classnames';

import Button, { IButtonProps } from '../Button';

export interface IAsyncButtonProps extends IButtonProps {
	pending?: boolean;
	onClick?: () => void;
}

export default function AsyncButton({ pending = false, onClick, ...props }: IAsyncButtonProps) {
	return (
		<Button
			className={classNames('_AsyncButton', { '_AsyncButton--Pending': pending })}
			{...props}
			onClick={pending ? () => {}
				: onClick}
		/>
	);
}

import './index.styl';
