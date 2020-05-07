import React from 'react';
import PropTypes from 'prop-types';
import { get, set, merge } from 'lodash';

import Context from './Context';

import Form from './Form'; // @TODO: Rename
import Field from './Field';

export default class FormContext extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};
	static defaultProps = {
		initialValues: {},
		volatile: {},
	};
	state = {
		values: this.props.initialValues,
		touched: {},
		errors: this.props.validate && this.props.validate(this.props.initialValues) || {},
		isDirty: true,
	};
	handleBlur = (e) => {
		this.touch(e.target.name);
	};
	set = (name, value, isTouched = false) => {
		this.handleChange(name, value, isTouched);
	};
	handleChange = (name, value, isTouched = false) => {
		this.setState(prevState => {
			const values = set({...prevState.values}, name, value);
			this.props.volatile[name] && merge(
				values,
				this.props.volatile[name](values),
			);
			const touched = {...prevState.touched};
			isTouched && merge(
				touched,
				{
					[name]: true,
				}
			);
			return {
				values,
				touched,
			}
		}, this.validate);
	};
	touch = (name) => {
		this.setState({
			touched: {
				...this.state.touched,
				[name]: true
			}
		}, this.validate);
	};
	validate = () => {
		this.setState({
			errors: this.props.validate && this.props.validate(this.state.values) || {},
		})
	};
	get isValid() {
		return !Object
			.values(this.state.errors)
			.filter(error => !!error)
			.length
	};
	handleSubmit = (e) => {
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
			handleChange: this.handleChange,
			handleSubmit: this.handleSubmit,
		};
		return (
			<Context.Provider
				value={contextValue}
			>
				{typeof this.props.children === 'function'
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
