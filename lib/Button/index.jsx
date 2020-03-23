import React from 'react';
import classNames from 'classnames';

import withClassName from '../../hoc/withClassName';

function Button({ _ghost, ...props }) {
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
