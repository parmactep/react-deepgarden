import React, { useEffect, useRef } from 'react';

interface IOutsideClickProps extends React.HTMLAttributes<HTMLDivElement> {
	onClickOutside?: (e: Event) => void;
}

function OutsideClick({ onClickOutside, ...props }: IOutsideClickProps) {
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		const handleClickOutside = (e: Event) => {
			if (ref.current?.contains(e.target as HTMLElement)) {
				return false;
			}
			onClickOutside && onClickOutside(e);
		};
		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return (
		<div ref={ref} {...props} />
	);
}

export default OutsideClick;
