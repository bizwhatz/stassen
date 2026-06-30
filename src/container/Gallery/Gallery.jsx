import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import './Gallery.css';

const galleryImages = [
  '/stassen/gallery/Al-Falaj.jpg',
  '/stassen/gallery/Al-Falaj-2.jpg',
  '/stassen/gallery/Al-Falaj-3.jpg',
  '/stassen/gallery/Al-Falaj-4.jpg',
  '/stassen/gallery/Al-Falaj-5.jpg',
  '/stassen/gallery/Al-Falaj-6.jpg',
  '/stassen/gallery/Al-Falaj-7.jpg',
  '/stassen/gallery/Al-Falaj-8.jpg',
  '/stassen/gallery/Al-Falaj-9.jpg',
  '/stassen/gallery/Al-Falaj-10.jpg',
  '/stassen/gallery/Al-Falaj-11.jpg',
  '/stassen/gallery/Al-Falaj-12.jpg',
  '/stassen/gallery/Al-Falaj-13.jpg',
  '/stassen/gallery/Al-Falaj-14.jpg',
  '/stassen/gallery/Al-Falaj-15.jpg',
  '/stassen/gallery/Al-Falaj-16.jpg',
  '/stassen/gallery/Al-Falaj-17.jpg',
  '/stassen/gallery/Al-Falaj-18.jpg',
  '/stassen/gallery/Al-Falaj-19.jpg',
  '/stassen/gallery/Al-Falaj-20.jpg',
  '/stassen/gallery/Al-Falaj-21.jpg',
  '/stassen/gallery/Al-Falaj-22.jpg',
  '/stassen/gallery/Al-Falaj-23.jpg',
  '/stassen/gallery/Al-Falaj-24.jpg',
  '/stassen/gallery/Al-Falaj-25.jpg',
  '/stassen/gallery/Al-Falaj-26.jpg',
  '/stassen/gallery/Al-Falaj-53.jpg',
  '/stassen/gallery/Al-Falaj-54.jpg',
  '/stassen/gallery/Al-Falaj-55.jpg',
  '/stassen/gallery/Al-Falaj-56.jpg',
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Experience the serene beauty of the Stassen Tea Lounge.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
