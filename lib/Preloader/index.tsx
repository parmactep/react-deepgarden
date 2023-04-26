import React from 'react';
import classNames from 'classnames';

interface IPreloaderProps {
	className?: string;
}

export default function (props: IPreloaderProps) {
	return <div className={classNames('_Preloader', props.className)} />;
}

import './index.styl';
