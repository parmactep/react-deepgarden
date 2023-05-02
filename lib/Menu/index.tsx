import React, { ReactNode, SyntheticEvent } from 'react';

type IOptions = {
	label: ReactNode;
	value: () => void
}

export interface IMenuProps {
	options?: IOptions[];
	onSelect?: (callback: any) => void;
}

export default function Menu({ options = [], onSelect = () => {} }: IMenuProps) {
	const handleSelect = (e: SyntheticEvent) => {
		const option = options[e.currentTarget.dataset.key];
		onSelect(option.value);
	}

	const renderOption = (option: IOptions, key: number) => (
		<div className="_Menu__Option" key={key} data-key={key} onClick={handleSelect}>
			{option.label}
		</div>
	);
	
	return <div className="_Menu">{options.map(renderOption)}</div>;
}

import './index.styl';
