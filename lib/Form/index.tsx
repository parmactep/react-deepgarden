import React from 'react';
import { set } from 'lodash';

import Context from './Context';

import Form from './Form'; // @TODO: Rename
import Field from './Field';

interface IFormContextProps {
	initialValues: {[x: string]: any;};
	validate?: (values: any) => {[x: string]: any;};
	onSubmit: (values: any) => Promise<void> | void;
	children?: React.ReactNode;
}

interface IFormContextState {
	values: {[x: string]: any;};
    touched: {[x: string]: boolean;};
    errors: {[x: string]: any;};
    isDirty: boolean;
}

export default class FormContext extends React.Component<IFormContextProps, IFormContextState> {
	static defaultProps = {
		initialValues: {},
	};
	static Context: React.Context<{}>;
	static Form: typeof Form;
	static Field: typeof Field;

	state: IFormContextState = {
		values: this.props.initialValues,
		touched: {},
		errors: this.props.validate && this.props.validate(this.props.initialValues) || {},
		isDirty: true,
	};
	get isValid() {
		return !Object
			.values(this.state.errors)
			.filter((error) => !!error)
			.length;
	}
	set = (name: string, value: any, isTouched = false) => {
		this.setState((prevState) => ({
			values: set({ ...prevState.values }, name, value),
			...(isTouched && {
				touched: {
					...prevState.touched,
					[name]: true,
				},
			}),
		}), this.validate);
	};
	touch = (name: string) => {
		this.setState({
			touched: {
				...this.state.touched,
				[name]: true,
			}
		}, this.validate);
	}
	handleBlur = (e: any) => {
		this.touch(e.target.name);
	}
	validate = () => {
		this.setState({
			errors: this.props.validate && this.props.validate(this.state.values) || {},
		});
	}
	handleSubmit = (e: Event) => {
		e && e.preventDefault();
		this.setState({
			isDirty: false,
		});
		this.isValid && this.props.onSubmit(this.state.values);
	};
	render() {
		const contextValue = {
			values: this.state.values,
			errors: this.state.errors,
			touched: this.state.touched,
			isValid: this.isValid,
			isDirty: this.state.isDirty,
			handleBlur: this.handleBlur,
			handleChange: this.set,
			handleSubmit: this.handleSubmit,
		};
		return (
			<Context.Provider
				value={contextValue}
			>
				{
					typeof this.props.children === 'function'
						? this.props.children(contextValue)
						: this.props.children
				}
			</Context.Provider>
		);
	}
}

FormContext.Context = Context;
FormContext.Form = Form;
FormContext.Field = Field;

import './index.styl';
