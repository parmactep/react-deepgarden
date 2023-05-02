import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { get } from 'lodash';

import Context from './Context';

export interface IFieldProps {
	className: string;
	name: string;
	pending: boolean;
	input: any;
	onChange: (value: any) => void;
	children: ReactNode;
}

export default class Field extends React.Component<IFieldProps> {
	static contextType = Context;
	handleChange = (e: any) => {
		const value = e.target?.value !== undefined ? e.target?.value : e; // @TODO: getValue from other input types

		this.context.handleChange(this.props.name, value);
		this.props.onChange && this.props.onChange(value);
	};
	render() {
		const {
			input,
			className,
			name,
			children,
			...props
		} = this.props;
		const Input = input || 'input';
		const value = get(this.context.values, name);

		return (
			<div className={classNames('_Form__Field', { '_Form__Field--hasError': (!this.context.isDirty || this.context.touched[name]) && this.context.errors[name] }, className)}>
				<Input
					{...props}
					value={value}
					name={name}
					onChange={this.handleChange}
					onBlur={this.context.handleBlur}
				/>
				{children}
			</div>
		);
	}
}
