import React from 'react';

import DropDown from './index';

type IWithDropDownProps = {
	dropDown: React.ReactNode;
	children: React.ReactNode;
}

export default function withDropDown(Component: React.ComponentType<any>) {
	return class extends React.Component<IWithDropDownProps> {
		state = {
			showDropDown: false,
		};
		toggleDropDown = () => {
			this.setState({
				showDropDown: !this.state.showDropDown,
			});
		};
		render() {
			const { dropDown, children, ...props } = this.props;
			return (
				<Component {...props} onToggleDropDown={this.toggleDropDown}>
					{children}
					{this.state.showDropDown
					&& (
						<DropDown onClose={this.toggleDropDown}>
							{dropDown}
						</DropDown>
					)}
				</Component>
			);
		}
	};
}
