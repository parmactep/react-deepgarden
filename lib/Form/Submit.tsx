import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';

import Preloader from '../Preloader';

import Context from './Context';

export interface ISubmitProps {
	className?: string;
	pending?: boolean;
	children?: ReactNode;
}

function Submit({ className, pending, children }: ISubmitProps) {
	const { handleSubmit } = useContext(Context);

	return (
		<form
			className={classNames('_Form__Form', className)}
			onSubmit={handleSubmit}
		>
			{children}
			<button type="submit" aria-label="Submit" className="_Form__HiddenSubmit" />
			{pending && <Preloader />}
		</form>
	);
}

export default Submit;
