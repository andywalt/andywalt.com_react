import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards_item'>
        <a href= {props.path} className="cards_item_link" target="_blank" rel="noopener noreferrer">
          <figure className='cards_item_pic-wrap' data-category={props.label}>
            <img
              className='cards_item_img'
              alt='Portfolio Pictures'
              src={props.src}
              path={props.path}
            />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.text}</h5>
            <p className="cards_item_description">{props.description}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;