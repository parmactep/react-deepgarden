import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

export default function ({ pending, onClick, ...props }) {
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
