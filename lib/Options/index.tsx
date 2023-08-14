import React, { ReactNode, SyntheticEvent } from 'react';
import classNames from 'classnames';

type IOptions = {
	label: ReactNode;
	value: () => void;
};

export interface IOptionsProps {
	options: IOptions[];
	onSelect?: (value: any) => void;
	value?: () => void;
}

function Options({ options = [], onSelect, value }: IOptionsProps) {
	const handleOption = (e: SyntheticEvent<HTMLDivElement>) => {
		const { key } = e.currentTarget.dataset;
		const selectedOption = options[Number(key)];
		onSelect && onSelect(selectedOption.value);
	};

	const renderOption = (option: IOptions, key: number) => (
		<div
			key={key}
			data-key={key}
			onClick={handleOption}
			className={classNames('_Options__Option', {
				'_Options__Option--Selected': option.value === value,
			})}
		>
			{option.label}
		</div>
	);

	return <div className="_Options">{options.map(renderOption)}</div>;
}

import './index.styl';

export default Options;
