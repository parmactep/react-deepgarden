import React, { useState, ReactNode, SyntheticEvent } from 'react';
import classNames from 'classnames';

export interface ITabProps {
	children: ReactNode;
}

export interface ITabsProps {
	onChange?: (key: number) => void;
	tabs: any[];
	children: ReactNode;
}

function Tab(props: ITabProps) {
	return (
		<div className="_Tabs__Tab">
			{props.children}
		</div>
	);
}

Tab.displayName = 'Tab';

function Tabs({ tabs = [], onChange, children }: ITabsProps) {
	const [active, setActive] = useState(0);

	const handleChange = (e: SyntheticEvent<HTMLDivElement>) => {
		const { key } = e.currentTarget.dataset;
		setActive(Number(key));
		onChange && onChange(Number(key));
	};

	const renderControl = (child: any, key: number) => {
		if (!child.type || child.type.displayName !== 'Tab') return;
		return (
			<div
				key={key}
				className={classNames('_Tabs__Title', { '_Tabs__Title--Active': key === active })}
				data-key={key}
				onClick={handleChange}
			>
				{child.props.title}
			</div>
		);
	};
	const renderChildren = (child: any, key: number) => {
		if (!child.type || child.type.displayName !== 'Tab' || key === active) return true;
	};

	const childrenArray = React.Children.toArray(children);

	return (
		<div className="_Tabs">
			<div className="_Tabs__Control">
				{childrenArray.map(renderControl)}
			</div>
			{childrenArray.filter(renderChildren)}
		</div>
	);
}

Tabs.Tab = Tab;

import './index.styl';

export default Tabs;
