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

const Dialog = withClassName('_Toast')(({ ...props }: IDialogProps) => {
	const handleConfirm = () => {
		props.onConfirm && props.onConfirm();
	};
	const handleClose = () => {
		props.onClose && props.onClose();
	};

	return (
		<div className="_Dialog__Overlay">
			<div className={props.className}>
				{
					<div className="_Dialog__Header">
						{ `${props.title || 'Delete confirmation'}` }
					</div>
				}
				<div className="_Dialog__Body">
					{props.children}
				</div>
				<div className="_Dialog__Footer">
					<Group>
						{
							props.withCancel && <Button _ghost onClick={handleClose}>{ props.cancelText || 'Cancel' }</Button>
						}
						<Button _type="success" onClick={handleConfirm}>Ok</Button>
					</Group>
				</div>
			</div>
		</div>
	);
});

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
