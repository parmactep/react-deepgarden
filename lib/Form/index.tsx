/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, ReactNode, FormEvent } from 'react';
import { set } from 'lodash';

import Context, { IContextValue } from './Context';

import Form from './Form'; // @TODO: Rename
import Field from './Field';

interface IFormContextProps {
	initialValues: { [x: string]: any };
	validate?: (values: any) => { [x: string]: any };
	onSubmit: (values: any) => Promise<void> | void;
	children?: ReactNode;
}

function FormContext({
	initialValues = {},
	validate,
	onSubmit,
	children,
}: IFormContextProps) {
	const [values, setValues] = useState(initialValues);
	const [touched, setTouched] = useState({});
	const [errors, setErrors] = useState(
		validate ? validate(initialValues) : {},
	);
	const [isDirty, setIsDirty] = useState(true);
	const isValid = !Object.values(errors).filter((error) => !!error).length;

	const validateForm = () => {
		setErrors(validate ? validate(values) : {});
	};

	const setFieldValue = (name: string, value: any, isTouched = false) => {
		setValues((prevValues) => set({ ...prevValues }, name, value));
		if (isTouched) {
			setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
		}
		validateForm();
	};

	const touchField = (name: string) => {
		setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
		validateForm();
	};

	const handleBlur = (e: any) => {
		touchField(e.target.name);
	};

	const handleSubmit = (e: FormEvent) => {
		e && e.preventDefault();
		setIsDirty(false);
		isValid && onSubmit(values);
	};

	const contextValue: IContextValue = {
		values,
		errors,
		touched,
		isValid,
		isDirty,
		handleBlur,
		handleChange: setFieldValue,
		handleSubmit,
	};

	return (
		<Context.Provider value={contextValue}>
			{
				// @ts-ignore
				typeof children === 'function' ? children(contextValue) : children
			}
		</Context.Provider>
	);
}

FormContext.Context = Context;
FormContext.Form = Form;
FormContext.Field = Field;

export default FormContext;

import './index.styl';
