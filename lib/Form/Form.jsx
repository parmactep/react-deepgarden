import React from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

export default class Form extends React.Component {
	static contextType = Context;
	const { className, pending, children, ...props } = this.props;
	render() {
		return (
			<form
				{...props}
				className={classNames('_Form__Form', className)}
				onSubmit={this.context.handleSubmit}
			>
				{children}
				<button type="submit" className="_Form__HiddenSubmit" />
				{pending && <Preloader />}
			</form>
		);
	}
}
