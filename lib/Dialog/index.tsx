import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';
import Group from '../Group';

import withClassName from '../../hoc/withClassName';

interface IDialogProps {
	onConfirm: (value?: any) => Promise<void> | void;
	onClose: (reason?: any) => void;
	title?: string;
	className?: string;
	withCancel?: boolean;
	cancelText?: string;
	children: React.ReactNode;
}

// @ts-ignore 	// @TODO: TS
@withClassName('_Dialog')
class Dialog extends React.Component<IDialogProps> {
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

export function dialog(text: React.ReactNode, props = {}) {
	const $node = document.createElement('div');
	document.body.appendChild($node);

	return new Promise(((resolve, reject) => {
		ReactDOM.render(
			<Dialog onConfirm={resolve} onClose={reject} {...props}>{text}</Dialog>,
			$node,
		);
	}))
		.finally(() => {
			ReactDOM.unmountComponentAtNode($node);
			document.body.removeChild($node);
		});
}

export default Dialog;

import './index.styl';
