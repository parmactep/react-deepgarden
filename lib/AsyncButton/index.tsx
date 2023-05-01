import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

interface IAsyncButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pending: boolean;
}

const AsyncButton: React.FC<IAsyncButtonProps> = ({ pending, onClick, className, ...props }) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!pending && onClick) {
        onClick(event);
      }
    },
    [pending, onClick]
  );

  return (
    <Button
      className={classNames(className, '_AsyncButton', { '_AsyncButton--Pending': pending })}
      onClick={handleClick}
      {...props}
    />
  );
};

export default AsyncButton;

import './index.styl';
