import React, {
	useEffect, useState, forwardRef, ReactNode, ComponentType,
} from 'react';
import ReactDOM from 'react-dom';

export interface IPortalProps {
	className?: string;
	children?: ReactNode;
}

function Portal({ className = '', children }: IPortalProps) {
	const [mountedNode, setMountedNode] = useState<HTMLDivElement>();

	useEffect(() => {
		const node = document.createElement('div');
		node.className = className;
		document.body.appendChild(node);
		setMountedNode(node);

		return () => {
			document.body.removeChild(node);
		};
	}, [className]);

	if (!mountedNode) {
		return null;
	}

	return ReactDOM.createPortal(
		children,
		mountedNode,
	);
}

export default Portal;

export function portal(portalProps: IPortalProps = {}) {
	return function<ComponentProps>(Component: ComponentType<ComponentProps>) {
		return forwardRef((props: ComponentProps, ref) => (
			<Portal {...portalProps}>
				<Component {...props as ComponentProps} ref={ref} />
			</Portal>
		));
	};
}
