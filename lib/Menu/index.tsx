import React from 'react';

type IOptions = {
	label: React.ReactNode;
	value: () => void
}

interface IMenuProps {
	options?: IOptions[];
	onSelect?: (callback: any) => void;
}

export default class Menu extends React.Component<IMenuProps> {
	static defaultProps: IMenuProps = {
		options: [],
		onSelect: () => {},
	};
	handleSelect = (e: any) => {
		const option = this.props.options[e.currentTarget.dataset.key];
		this.props.onSelect(option.value);
	};
	renderOption = (option: IOptions, key: number) => (
		<div className="_Menu__Option" key={key} data-key={key} onClick={this.handleSelect}>
			{option.label}
		</div>
	);
	render() {
		return (
			<div className="_Menu">
				{this.props.options.map(this.renderOption)}
			</div>
		);
	}
}

import './index.styl';
