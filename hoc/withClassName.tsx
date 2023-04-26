import React from 'react';
import classNames from 'classnames';

const TYPES: Record<string, string> = {
	'notice': '--Notice',
	'success': '--Success',
	'warning': '--Warning',
	'danger': '--Danger',
};

const SIZES: Record<string, string> = {
	smallest: '--Smallest',
	smaller: '--Smaller',
	bigger: '--Bigger',
	biggest: '--Biggest',
};

interface IWithClassName {
	_type?: string;
	_size?: string;
	[x: string]: any;
}

export default function withClassName(className: string) {
	return (Component: React.ComponentType<any>) => ({ _type = '', _size = '', ...props }: IWithClassName) => (
		<Component
			{...props}
			className={classNames(
				className,
				TYPES[_type] && className + TYPES[_type],
				SIZES[_size] && className + SIZES[_size],
				props.className,
			)}
		/>
	);
}
