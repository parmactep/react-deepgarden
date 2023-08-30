import React, { ComponentType } from 'react';

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

export interface IWithClassNameProps {
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
				/>
			);
		};
	};
}