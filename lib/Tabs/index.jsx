import React from 'react';
import classNames from 'classnames';

const Tab = (props) => {
	return (
		<div className="_Tabs__Tab">
			{props.children}
		</div>
	);
};

Tab.displayName = 'Tab';

export default class Tabs extends React.Component {
	static defaultProps = {
		tabs: [],
	};
	state = {
		active: 0,
	};
	handleChange = (e) => {
		const key = Number(e.currentTarget.dataset.key);
		this.setState({
			active: key,
		});
		this.props.onChange && this.props.onChange(key);
	};
	renderControl = (child, key) => {
		if (!child.type || child.type.displayName !== 'Tab')
			return;
		return (
			<div
				key={key}
				className={classNames('_Tabs__Title', {'_Tabs__Title--Active': key === this.state.active})}
				data-key={key}
				onClick={this.handleChange}
			>
				{child.props.title}
			</div>
		);
	};
	renderChildren = (child, key) => {
		if (!child.type || child.type.displayName !== 'Tab' || key === this.state.active)
			return true;
	};
	render() {
		const children = React.Children.toArray(this.props.children);
		return (
			<div className="_Tabs">
				<div className="_Tabs__Control">
					{children.map(this.renderControl)}
				</div>
				{children.filter(this.renderChildren)}
			</div>
		);
	}
}

Tabs.Tab = Tab;

import './index.styl';
