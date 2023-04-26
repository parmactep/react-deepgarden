import React from 'react';

interface IOutsideClickProps {
	onClickOutside: (e: Event) => void;
}

interface IOutsideClickState {
	node?: HTMLDivElement | null;
}

export default class OutsideClick extends React.Component<IOutsideClickProps> {
	nodeRef = React.createRef<HTMLDivElement>();
	state: IOutsideClickState = {
		node: null,
	};
	componentDidMount() {
		this.setState({
			node: this.nodeRef.current,
		});
		document.addEventListener('click', this.handleClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	}
	handleClickOutside = (e: any) => {
		if (this.state.node.contains(e.target)) {
			return false;
		}
		this.props.onClickOutside && this.props.onClickOutside(e);
	};
	render() {
		return (
			<div style={{ display: 'contents' }} ref={this.nodeRef}>
				{this.props.children}
			</div>
		);
	}
}
