import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

interface IAsyncButtonProps {
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
