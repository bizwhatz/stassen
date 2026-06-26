import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const products = [
  { img: images.tea01, title: 'Organic Green Tea', price: 'OMR 2.500' },
  { img: images.tea02, title: 'English Breakfast', price: 'OMR 2.500' },
  { img: images.tea03, title: 'Earl Grey Tea', price: 'OMR 2.500' },
  { img: images.tea04, title: 'Cherry Ceylon', price: 'OMR 2.000' },
  { img: images.tea05, title: 'Pure Ceylon', price: 'OMR 2.000' },
  { img: images.tea01, title: 'Green Tea (Refill)', price: 'OMR 2.000' },
  { img: images.tea02, title: 'Breakfast Tea (Large)', price: 'OMR 3.500' },
  { img: images.tea03, title: 'Earl Grey Special', price: 'OMR 3.000' },
];

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Our Collection" />
        <h1 className="headtext__cormorant">Special Offers</h1>
      </div>

      <div className="app__specialMenu-carousel_wrapper">
        <div className="app__specialMenu-carousel_track">
          {/* First set of products */}
          {products.map((product, index) => (
            <div className="app__specialMenu-carousel_card" key={`product-a-${index}`}>
              <img src={product.img} alt="product" />
              <div className="app__specialMenu-carousel_card-info">
                <div>
                  <p className="p__cormorant" style={{ color: 'var(--color-golden)' }}>{product.title}</p>
                  <p className="p__opensans" style={{ color: 'var(--color-white)' }}>{product.price}</p>
                </div>
                <button type="button" className="custom__button" style={{ marginTop: '1.5rem', padding: '0.4rem 1rem', fontSize: '14px' }}>Add to Cart</button>
              </div>
            </div>
          ))}
          {/* Second set of products for infinite looping */}
          {products.map((product, index) => (
            <div className="app__specialMenu-carousel_card" key={`product-b-${index}`}>
              <img src={product.img} alt="product" />
              <div className="app__specialMenu-carousel_card-info">
                <div>
                  <p className="p__cormorant" style={{ color: 'var(--color-golden)' }}>{product.title}</p>
                  <p className="p__opensans" style={{ color: 'var(--color-white)' }}>{product.price}</p>
                </div>
                <button type="button" className="custom__button" style={{ marginTop: '1.5rem', padding: '0.4rem 1rem', fontSize: '14px' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
