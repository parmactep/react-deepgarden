import React from 'react';
import classNames from 'classnames';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import withClassName from '../../hoc/withClassName';

export interface IPaginationProps {
	from?: number,
	to?: number,
	total?: number,
	className?: string,
	onChange: (val: number) => void
}

function Pagination({
	from = 0,
	to = 0,
	total = 0,
	className,
	onChange,
}: IPaginationProps) {
	const handleNext = () => {
		if (to < total && onChange) {
			onChange(to + 1);
		}
	};

	const handlePrevious = () => {
		const onPage = to - from + 1;
		const newFrom = from - onPage;
		if (from > 1 && onChange) {
			onChange(newFrom > 0 ? newFrom : 1);
		}
	};

	return (
		<div className={classNames('_Pagination', className)}>
			<div
				className={classNames('_Pagination__Previous', {
					'_Pagination__Previous--Disabled': from === 1,
				})}
				onClick={handlePrevious}
			>
				<FaChevronLeft />
			</div>
			<div className="_Pagination__Select">
				{`${from} - ${to} / ${total}`}
			</div>
			<div
				className={classNames('_Pagination__Next', {
					'_Pagination__Next--Disabled': to === total,
				})}
				onClick={handleNext}
			>
				<FaChevronRight />
			</div>
		</div>
	);
};

export default withClassName('_Pagination')(Pagination);

import './index.styl';
