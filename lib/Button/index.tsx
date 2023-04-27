import React from 'react';
import classNames from 'classnames';

import withClassName from '../../hoc/withClassName';

interface IButtonProps {
	_ghost?: boolean;
	className?: string;
	href?: string;
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
	[x: string]: any;
}

function Button({ _ghost, ...props }: IButtonProps) {
	const Component = !!props.href ? 'a' : 'button';
	if (props.disabled) {
		delete props.onClick;
	}
	return (
		<Component type="button" {...props} className={classNames(props.className, { '_Button--Ghost': _ghost }, { '_Button--Disabled': props.disabled })}>
			{props.children}
		</Component>
	);
}

export default withClassName('_Button')(Button);

import './index.styl';
