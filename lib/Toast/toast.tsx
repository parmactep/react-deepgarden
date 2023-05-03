import React from 'react';
import ReactDOM from 'react-dom';

import Toast from './index';

const DEFAULT_TIMEOUT = 5000;

import { portal } from '../../hoc/portal';

const $node = document.createElement('div'); // @TODO: Test browser support

const toasts = new Map();

// @ts-ignore 	// @TODO: TS
const Toasts = portal({ className: '_Toast__Overlay' })(() => {
	const toastElements = Array.from(toasts.keys()).map((toast, index) => (
		<Toast key={index} {...toast} />
	));
	return toastElements;
});

function removeToast(props: {[x: string]: any}) {
	toasts.delete(props);

	if (toasts.size) {
		ReactDOM.render(
			<Toasts />,
			$node,
		);
	} else {
		ReactDOM.unmountComponentAtNode($node);
	}
}

export default function toast({ timeout = DEFAULT_TIMEOUT, ...props }) {
	toasts.set(props, true);

	setTimeout(() => removeToast(props), timeout);

	ReactDOM.render(
		<Toasts />,
		$node,
	);
}
