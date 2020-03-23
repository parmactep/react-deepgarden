import React from 'react';

import classNames from 'classnames';

import './index.styl';

export default (props) => {
	return (
		<div className={classNames('_Group', props.className)}>
			{props.children}
		</div>
	);
};
