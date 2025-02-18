import React, { memo } from 'react';

const GridCard = ({ data, renderItem, rowClassName = '', colClassName = '' }) => {
  return (
    <div className={`row ${rowClassName}`}>
      {data.map((item, index) => (
        <div key={item.id || index} className={`col ${colClassName}`}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default memo(GridCard);
