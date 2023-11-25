import React from 'react';
import photo from '../img/photo/photo.SVG';
import blockPhoto from '../img/blockPhoto/blockPhoto.SVG';

const LeftContent = () => {
  return (
    <div className='left-content-box'>
        <div className='photo-box'>
            <img src={photo} alt="photo" />
        </div>
        <div className='block-photo-box'>
            <img src={blockPhoto} alt="blockPhoto" />
        </div>
    </div>
  )
}

export default LeftContent;