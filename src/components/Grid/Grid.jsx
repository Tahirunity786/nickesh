import React, { memo } from 'react';

const Grid = ({ data, rowClass = '', colClass = '', isMargin = false, isPadding = false }) => {
  return (
    <div className={`row ${rowClass}  ${isPadding ? 'p-3' : ''}`}>
      {data.map((item, index) => (
        <div key={index} className={colClass || `col-lg-${item.colSize || 12} ${isMargin ? 'mb-5' : ''}`}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default memo(Grid);
