import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
	className?: string;
}

interface IPortalState {
	node?: HTMLDivElement | null;
}


export default class Portal extends React.Component<IPortalProps, IPortalState> {
	static defaultProps = {
		className: '_Portal__Overlay',
	};
	constructor(props: IPortalProps) {
		super(props);
		const node = document.createElement('div');
		node.className = props.className;
		this.state = {
			node,
		};
		document.body.appendChild(this.state.node);
	}
	componentWillUnmount() {
		document.body.removeChild(this.state.node);
	}
	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.state.node,
		);
	}
}
export function portal(options = {}) {
	return (Component: React.ComponentType<any>) => forwardRef<React.ReactPortal>((props, ref) => (
		<Portal {...options}>
			<Component {...props} ref={ref} />
		</Portal>
	));
}
