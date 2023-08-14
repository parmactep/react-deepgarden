import React from 'react';
import { createRoot } from 'react-dom/client';

import Toast from './index';

const DEFAULT_TIMEOUT = 5000;

import { portal } from '../../hoc/portal';

const $node = document.createElement('div'); // @TODO: Test browser support
const root = createRoot($node);

let toasts = new Map();

const Toasts = portal({
	className: '_Toast__Overlay',
})(function () {
	return [...toasts.keys()].map((toast, key) => <Toast key={key} {...toast} />);
})

export default function toast({ timeout = DEFAULT_TIMEOUT, ...props }) {

	toasts.set(props, true);

	setTimeout(() => removeToast(props), timeout);

	root.render(
		<Toasts />
	);
}

function removeToast(props) {

	toasts.delete(props);

	root.render(
		<Toasts />
	);
}
