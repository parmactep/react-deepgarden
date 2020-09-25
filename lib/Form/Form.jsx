import React from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

export default class Form extends React.Component {
	static contextType = Context;
	render() {
		const { className, pending, children, ...props } = this.props;
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
