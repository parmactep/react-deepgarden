/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

export interface IFormProps {
	className?: string;
	pending?: boolean;
	children?: ReactNode;
}

export default class Form extends React.Component<IFormProps> {
	static contextType = Context;
	render() {
		return (
			<form
				className={classNames('_Form__Form', this.props.className)}
				onSubmit={this.context.handleSubmit}
			>
				{this.props.children}
				<button type="submit" className="_Form__HiddenSubmit" />
				{this.props.pending && <Preloader />}
			</form>
		);
	}
}
