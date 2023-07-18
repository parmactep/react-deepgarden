import React from 'react';
import { createRoot } from 'react-dom/client';

import Button from '../Button';
import Group from '../Group';

import withClassName from '../../hoc/withClassName';

@withClassName('_Dialog')
class Dialog extends React.Component {
	handleConfirm = () => {
		this.props.onConfirm && this.props.onConfirm();
	};
	handleClose = () => {
		this.props.onClose && this.props.onClose();
	};
	render() {
		return (
			<div className="_Dialog__Overlay">
				<div className={this.props.className}>
					{
						<div className="_Dialog__Header">
							{ `${this.props.title || 'Delete confirmation'}` }
						</div>
					}
					<div className="_Dialog__Body">
						{this.props.children}
					</div>
					<div className="_Dialog__Footer">
						<Group>
							{
								this.props.withCancel && <Button _ghost onClick={this.handleClose}>{ this.props.cancelText || 'Cancel' }</Button>
							}
							<Button _type="success" onClick={this.handleConfirm}>Ok</Button>
						</Group>
					</div>
				</div>
			</div>
		);
	}
}

export function dialog(text, props = {}) {
	const $node = document.createElement('div');
	document.body.appendChild($node);
	const root = createRoot($node);

	return new Promise(((resolve, reject) => {
		root.render(
			<Dialog
				onConfirm={resolve}
				onClose={reject}
				{...props}
			>
				{text}
			</Dialog>
		);
	}))
		.finally(() => {
			root.unmount();
			document.body.removeChild($node);
		});
}

export default Dialog;

import './index.styl';
