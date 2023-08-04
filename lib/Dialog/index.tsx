import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

import Button from '../Button';
import Group from '../Group';

import withClassName from '../../hoc/withClassName';

export interface IDialogProps {
	onConfirm?: (value?: any) => Promise<void> | void;
	onClose?: (reason?: any) => void;
	title?: string;
	className?: string;
	withCancel?: boolean;
	cancelText?: string;
	children?: ReactNode;
	_type?: string
}

const Dialog = withClassName('_Dialog')(({
	onConfirm,
	onClose,
	title,
	className,
	withCancel,
	cancelText,
	children,
}: IDialogProps) => {
	const handleConfirm = () => {
		onConfirm && onConfirm();
	};
	const handleClose = () => {
		onClose && onClose();
	};

	return (
		<div className="_Dialog__Overlay">
			<div className={className}>
				<div className="_Dialog__Header">
					{title || 'Delete confirmation'}
				</div>
				<div className="_Dialog__Body">
					{children}
				</div>
				<div className="_Dialog__Footer">
					<Group>
						{
							withCancel && <Button _ghost onClick={handleClose}>{ cancelText || 'Cancel' }</Button>
						}
						<Button _type="success" onClick={handleConfirm}>Ok</Button>
					</Group>
				</div>
			</div>
		</div>
	);
});

export function dialog(text: ReactNode, props: IDialogProps = {}) {
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
			</Dialog>,
		);
	}))
		.finally(() => {
			root.unmount();
			document.body.removeChild($node);
		});
}

export default Dialog;

import './index.styl';
