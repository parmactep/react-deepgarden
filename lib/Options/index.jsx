import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {
	static defaultProps = {
		options: [],
	}
	handleOption = (e) => {
		const { key } = e.currentTarget.dataset;
		const { value } = this.props.options[key];
		this.props.onSelect && this.props.onSelect(value);
	}
	renderOption = (option, key) => (
		<div
			key={key}
			data-key={key}
			onClick={this.handleOption}
			className={classNames('_Options__Option', { '_Options__Option--Selected': option.value === this.props.value })}
		>
			{option.label}
		</div>
	)
	render() {
		return (
			<div className="_Options">
				{this.props.options.map(this.renderOption)}
			</div>
		);
	}
}

import './index.styl';
