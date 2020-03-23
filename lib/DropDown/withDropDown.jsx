import React from 'react';

import DropDown from './index';

export default function withDropDown(Component) {
	return class extends React.Component {
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
