import React, { useState, useEffect } from 'react';
import portfolioTypes from '../../Data/portfolioTypes';
import Lightbox from 'react-18-image-lightbox';//modal window
import 'react-18-image-lightbox/style.css';
import './GalleryComp.sass';

export default function GalleryComp({ typeId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [key, setKey] = useState(false);

  // to prevent indefinite download of the img downloading in modal window
  useEffect(() => {
    setTimeout(() => setKey(key + 1));
  }, [isOpen]);

  // looking images in array of selected gallery type
  const type = portfolioTypes.find((types) => types.id === typeId);

  // paths to images for modal window
  const images = Array.from(
    { length: type.count },
    (item, i) => `../images/${type.name}/${type.name}${i + 1}.jpg`,
  );


  return (
    <div className="portfolio__choosen">
      <h4 className="portfolio__title">{type.name}</h4>
      <div className="portfolio__gallery">
        {Array.from({ length: type.count }, (item, index) => (
          <div
            key={type.id + index}
            className="portfolio__block"
            onClick={() => {
              setIsOpen(true);
              setImgIndex(index);
            }}>
            <img
              src={`../images/${type.name}/${type.name}${index + 1}.jpg`}
              alt={`${type.name} ${index + 1}`}
              className="portfolio__image"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          key={key}
          mainSrc={images[imgIndex]}
          nextSrc={images[(imgIndex + 1) % images.length]}
          prevSrc={images[(imgIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}
