import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

interface IAsyncButtonProps {
	pending: boolean;
	onClick: () => void;
	[x: string]: any;
}

export default function ({ pending, onClick, ...props }: IAsyncButtonProps) {
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
