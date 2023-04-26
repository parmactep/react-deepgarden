import React from 'react';

type IOptions = {
	label: React.ReactNode;
	value: () => void
}

interface INavProps {
	options?: IOptions[];
	onSelect?: (callback: any) => void;
}

export default class Nav extends React.Component<INavProps> {
	static defaultProps: INavProps = {
		options: [],
		onSelect: () => {},
	};
	handleSelect = (e: any) => {
		const option = this.props.options[e.currentTarget.dataset.key];
		this.props.onSelect(option.value);
	};
	renderOption = (option: IOptions, key: number) => (
		<div className="_Nav__Option" key={key} data-key={key} onClick={this.handleSelect}>
			{option.label}
		</div>
	);
	render() {
		return (
			<div className="_Nav">
				{this.props.options.map(this.renderOption)}
			</div>
		);
	}
}

import './index.styl';
