import React from 'react';
import { createRoot } from 'react-dom/client';

import Toast, { IToastProps } from './index';
import { IWithClassNameProps } from '../../hoc/withClassName';

const DEFAULT_TIMEOUT = 5000;

import { portal } from '../../hoc/portal';

const $node = document.createElement('div'); // @TODO: Test browser support
const root = createRoot($node);

let toasts = new Map();

const Toasts = portal({
	className: '_Toast__Overlay',
})(function () {
	return (<>
		{Array.from(toasts.keys())
			.map((toast, key) => (
				<Toast key={key} {...toast} />
			))}
	</>);
});

interface IToastArgs extends IWithClassNameProps, IToastProps {
	timeout?: number;
}

export default function toast({ timeout = DEFAULT_TIMEOUT, ...props }: IToastArgs) {

	toasts.set(props, true);

	setTimeout(() => removeToast(props), timeout);

	root.render(
		<Toasts />
	);
}

function removeToast(props: IToastProps) {

	toasts.delete(props);

	root.render(
		<Toasts />
	);
}
