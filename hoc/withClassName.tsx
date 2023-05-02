import React, { ComponentType } from 'react';
import classNames from 'classnames';

type Type = 'notice' | 'success' | 'warning' | 'danger';
type Size = 'smallest' | 'smaller' | 'bigger' | 'biggest';

const TYPES: Record<Type, string> = {
	notice: '--Notice',
	success: '--Success',
	warning: '--Warning',
	danger: '--Danger',
  };
  
  const SIZES: Record<Size, string> = {
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
		return function ComponentWithClassName({ _type, _size, className, ...props }: ComponentProps & IWithClassNameProps) {
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
			)
		}
	}
}
