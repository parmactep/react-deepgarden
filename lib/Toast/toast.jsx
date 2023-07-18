import React from 'react';
import { createRoot } from 'react-dom/client';

import Toast from './index';

const DEFAULT_TIMEOUT = 5000;

import { portal } from '../../hoc/portal';

const $node = document.createElement('div'); // @TODO: Test browser support
const root = createRoot($node);

let toasts = new Map();

@portal({
	className: '_Toast__Overlay',
})
class Toasts extends React.Component {
	render() {
		return [...toasts.keys()].map((toast, key) => <Toast key={key} {...toast} />);
	}
}

export default function toast({ timeout = DEFAULT_TIMEOUT, ...props }) {

	toasts.set(props, true);

	setTimeout(() => removeToast(props), timeout);

	root.render(
		<Toasts />
	);
}

function removeToast(props) {

	toasts.delete(props);

	if (toasts.size) {
		root.render(
			<Toasts />
		);
	} else {
		root.unmount();
	}
}
