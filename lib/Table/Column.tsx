import React from 'react';
import classNames from 'classnames';


interface IColumnProps {
  className?: string;
  width?: string | number;
  title?: React.ReactNode;
}

const Column: FC<IColumnProps> = ({ width, children, className }) => (
  <div className={classNames('_Table__Column', className)} style={{ width }}>
    {children}
  </div>
);

export default Column;