import React from 'react';
import classNames from 'classnames';
import { get, set } from 'lodash';

import Context from './Context';

export default class Field extends React.Component {
	static contextType = Context;
	handleChange = (e) => {
		const value = e.target?.value !== undefined ? e.target?.value : e; //@TODO: getValue from other input types

		this.context.handleChange(this.props.name, value);
		this.props.onChange && this.props.onChange(value);
	};
	render() {
		const { input, className, name, label, ...props } = this.props;
		const Input = input || 'input';
		const value = get(this.context.values, name);

		return (
			<label className={classNames('_Form__Field', {'_Form__Field--hasError': (!this.context.isDirty || this.context.touched[name]) && this.context.errors[name]}, className)}>
				{!!label && (
					<span className="_Form__Label">
						{label}
					</span>
				)}
				<Input
					{...props}
					value={value}
					name={name}
					onChange={this.handleChange}
					onBlur={this.context.handleBlur}
				/>
			</label>
		);
	}
}
