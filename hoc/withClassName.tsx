import React, { ComponentType } from 'react';
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

interface IWithClassNameProps {
	_type?: string;
	_size?: string;
	className?: string;
}

export default function withClassName(injectedClassName: string) {
	return function hocWithClassName<ComponentProps>(Component: ComponentType<ComponentProps>) {
		return function ComponentWithClassName({ _type, _size, className, ...props }: ComponentProps & IWithClassNameProps) {
			return (
				<Component
					{...props as ComponentProps}
					className={classNames(
						injectedClassName,
						TYPES[_type] && className + TYPES[_type],
						SIZES[_size] && className + SIZES[_size],
						className,
					)}
				/>
			)
		}
	}
}
