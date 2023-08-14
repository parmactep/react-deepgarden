import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

interface IFormProps {
	className?: string;
	pending?: boolean;
	children?: ReactNode;
}

function Form(props: IFormProps) {
	const { handleSubmit } = useContext(Context);

	return (
		<form
			className={classNames('_Form__Form', props.className)}
			onSubmit={handleSubmit}
		>
			{props.children}
			<button type="submit" aria-label="Submit" className="_Form__HiddenSubmit" />
			{props.pending && <Preloader />}
		</form>
	);
}

export default Form;
