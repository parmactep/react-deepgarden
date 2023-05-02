import React, { useState, useEffect, forwardRef, ComponentType } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
	className?: string;
}

export default function Portal({ className = '_Portal__Overlay', children }: React.PropsWithChildren<IPortalProps>) {
	const [node, setNode] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		const newNode = document.createElement('div');
		newNode.className = className;
		setNode(newNode);
		document.body.appendChild(newNode);
		return () => {
			document.body.removeChild(newNode);
		};
	}, [className]);

	if (!node) {
		return null;
	}

	return ReactDOM.createPortal(children, node);
}

export function portal(options: IPortalProps = {}) {
	return function hocPortal<ComponentProps>(Component: ComponentType<ComponentProps>) {
		return forwardRef((props: ComponentProps, ref: React.ReactNode) => (
			<Portal {...options}>
				<Component {...props} ref={ref} />
			</Portal>
		));
	};
}
