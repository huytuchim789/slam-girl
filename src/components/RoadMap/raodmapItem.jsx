import React from 'react';

function RoadmapItem({ title, list }) {
  return (
    <div className="item">
      <p className="item-title">{title}</p>
      {list.map((item) => (
        <div className="list">
          <p className="list-title">{item.title}</p>
          {item.content.map((itemList, itemListIndex) => (
            <span key={itemListIndex} className="list-content">
              {itemList}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RoadmapItem;
