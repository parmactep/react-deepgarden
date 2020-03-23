import React from 'react';

export default class Menu extends React.Component {
	static defaultProps = {
		options: [],
		onSelect: () => {},
	};
	handleSelect = (e) => {
		const option = this.props.options[e.currentTarget.dataset.key];
		this.props.onSelect(option.value);
	};
	renderOption = (option, key) => (
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
