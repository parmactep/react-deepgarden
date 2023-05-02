import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ITabProps {
	children: ReactNode;
}

interface ITabsProps {
	onChange?: (key: number) => void;
	tabs: any[];
}

interface ITabsState {
	active: number;
}

const Tab = (props: ITabProps) => (
	<div className="_Tabs__Tab">
		{props.children}
	</div>
);

Tab.displayName = 'Tab';

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
	static defaultProps: ITabsProps = {
		tabs: [],
	};
	static Tab: typeof Tab;
	state: ITabsState = {
		active: 0,
	};
	handleChange = (e: any) => {
		const key = Number(e.currentTarget.dataset.key);
		this.setState({
			active: key,
		});
		this.props.onChange && this.props.onChange(key);
	};
	renderControl = (child: any, key: number) => {
		if (!child.type || child.type.displayName !== 'Tab') return;
		return (
			<div
				key={key}
				className={classNames('_Tabs__Title', { '_Tabs__Title--Active': key === this.state.active })}
				data-key={key}
				onClick={this.handleChange}
			>
				{child.props.title}
			</div>
		);
	};
	renderChildren = (child: any, key: number) => {
		if (!child.type || child.type.displayName !== 'Tab' || key === this.state.active) return true;
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
