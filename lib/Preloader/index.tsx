import React from 'react';
import classNames from 'classnames';

export interface IPreloaderProps {
	className?: string;
}

function Preloader({ className }: IPreloaderProps) {
	return <div className={classNames('_Preloader', className)} />;
}

import './index.styl';

export default Preloader;
