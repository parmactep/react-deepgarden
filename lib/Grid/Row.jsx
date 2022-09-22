import React from 'react';
import classNames from 'classnames';

export default ({ className, children }) => {
	return (
		<div className={classNames('_Grid__Row', className)}>
			{children}
		</div>
	);
};
