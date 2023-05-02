import React, { useEffect, ReactElement, useRef } from 'react';

interface IOutsideClickProps {
	children?: ReactElement;
	onClickOutside?: (e: Event) => void;
}

function OutsideClick({ children, onClickOutside }: IOutsideClickProps) {

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
		<div ref={ref}>
			{children}
		</div>
	);
}

export default OutsideClick;
