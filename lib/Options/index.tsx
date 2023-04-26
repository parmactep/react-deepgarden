import React from 'react';
import classNames from 'classnames';

type IOptions = {
	label: React.ReactNode;
	value: () => void;
}

interface IOptionsProps {
	options: IOptions[];
	onSelect?: (value: any) => void;
	value?: () => void;
}

export default class extends React.Component<IOptionsProps> {
	static defaultProps: IOptionsProps = {
		options: [],
	}
	handleOption = (e: any) => {
		const { key } = e.currentTarget.dataset;
		const { value } = this.props.options[key];
		this.props.onSelect && this.props.onSelect(value);
	}
	renderOption = (option: IOptions, key: number) => (
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
