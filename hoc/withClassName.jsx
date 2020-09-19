import React from 'react';
import classNames from 'classnames';

const TYPES = {
	'notice': '--Notice',
	'success': '--Success',
	'warning': '--Warning',
	'danger': '--Danger',
};

const SIZES = {
	smallest: '--Smallest',
	smaller: '--Smaller',
	bigger: '--Bigger',
	biggest: '--Biggest',
};

export default function withClassName(className) {
	return (Component) => ({ _type, _size, _block, ...props }) => {
		return (
			<Component
				{...props}
				className={classNames(
					className,
					TYPES[_type] && className + TYPES[_type],
					SIZES[_size] && className + SIZES[_size],
					_block && '--isBlock',
					props.className,
				)}
			/>
		);
	};
}
