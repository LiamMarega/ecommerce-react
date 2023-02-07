import React from "react";
import "./styles.scss";

function CardImage({ image, title, description }) {
  return (
    <div className='card-image'>
      <div className='item'>
        <div className='thumb'>
          <img width={"100%"} src={image} alt='' />
          <div className='hover-effect'>
            <div className='inner-content'>
              <a rel='sponsored' href='' target='_parent'>
                <h4>{title}</h4>
              </a>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
