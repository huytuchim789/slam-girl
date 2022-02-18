import React from 'react';

function NftifyItem({ imageUrl, content, title, index }) {
  return (
    <div className='item'>
      <div className='item__content'>
        <div className={'image__wrapper image__wrapper--' + index}>
          <img
            width='40'
            height='40'
            className='item--image'
            src={imageUrl}
            alt={title}
          />
        </div>
        <h5>{title}</h5>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

export default NftifyItem;
