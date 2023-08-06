import React, { useState, ReactNode, ComponentProps } from 'react';

import DropDown from './index';

export interface IWithDropDownProps extends ComponentProps<any>{
	dropDown: ReactNode;
	children: ReactNode;
}

export default function withDropDown(Component: React.ComponentType<any>) {
	return ({dropDown, children, ...props}: IWithDropDownProps) => {
		const [showDropDown, setShowDropDown] = useState(false);

		const toggleDropDown = () => {
			setShowDropDown(!showDropDown);
		};

		return (
			<Component {...props} onToggleDropDown={toggleDropDown}>
				{children}
				{showDropDown && (
					<DropDown onClose={toggleDropDown}>{dropDown}</DropDown>
				)}
			</Component>
		);
	};
}