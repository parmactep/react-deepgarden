import React, { ComponentType } from 'react';
import classNames from 'classnames';

const TYPES: Record<string, string> = {
	notice: '--Notice',
	success: '--Success',
	warning: '--Warning',
	danger: '--Danger',
};

const SIZES: Record<string, string> = {
	smallest: '--Smallest',
	smaller: '--Smaller',
	bigger: '--Bigger',
	biggest: '--Biggest',
};

interface IWithClassNameProps {
	_type?: keyof typeof TYPES;
	_size?: keyof typeof SIZES;
	className?: string;
}

export default function withClassName(injectedClassName: string) {
	return function hocWithClassName<ComponentProps>(Component: ComponentType<ComponentProps>) {
		return function ComponentWithClassName({
			_type, _size, className, ...props
		}: ComponentProps & IWithClassNameProps) {
			return (
				<Component
					{...props as ComponentProps}
					className={classNames(
						injectedClassName,
						TYPES[_type] && injectedClassName + TYPES[_type],
						SIZES[_size] && injectedClassName + SIZES[_size],
						className,
					)}
				/>
			);
		};
	};
}
