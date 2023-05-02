import React, { useEffect, ReactElement, useRef } from 'react';

interface IOutsideClickProps {
	onClickOutside?: (e: Event) => void;
}

function OutsideClick({ onClickOutside, ...props }: IOutsideClickProps) {

	const ref = useRef<HTMLDivElement>();

	useEffect(() => {

		const handleClickOutside = (e: Event) => {
			if (ref.current.contains(e.target as HTMLElement)) {
				return false;
			}
			onClickOutside && onClickOutside(e);
		};
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, []);

	return (
		<div ref={ref} {...props} />
	);
}

export default OutsideClick;
