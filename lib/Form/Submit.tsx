/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

export interface ISubmitProps {
	className?: string;
	pending?: boolean;
	children?: ReactNode;
}

export default function Form({ className, pending, children }: ISubmitProps) {
	const { handleSubmit } = useContext(Context);

	return (
		<form
			className={classNames('_Form__Form', className)}
			onSubmit={handleSubmit}
		>
			{children}
			<button type="submit" className="_Form__HiddenSubmit" />
			{pending && <Preloader />}
		</form>
	);
};
