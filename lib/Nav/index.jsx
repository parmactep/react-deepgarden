import React from 'react';

export default class Nav extends React.Component {
	static defaultProps = {
		options: [],
		onSelect: () => {},
	};
	handleSelect = (e) => {
		const option = this.props.options[e.currentTarget.dataset.key];
		this.props.onSelect(option.value);
	};
	renderOption = (option, key) => (
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
