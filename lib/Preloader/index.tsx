import React from 'react';
import classNames from 'classnames';

export interface IPreloaderProps {
	className?: string;
}

export default function ({ className }: IPreloaderProps) {
	return <div className={classNames('_Preloader', className)} />;
}

import './index.styl';
