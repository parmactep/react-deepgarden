import React from 'react';
import classNames from 'classnames';

const Column = ({ width, children, className }) => (
	<div
		className={classNames('_Table__Column', className)}
		style={width && { width }}
	>
		{children}
	</div>
);

export default Column;
