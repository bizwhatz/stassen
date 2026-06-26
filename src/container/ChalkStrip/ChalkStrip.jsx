import React from 'react';
import { images } from '../../constants';
import './ChalkStrip.css';

const chalkImages = [
  images.cat01,
  images.cat02,
  images.cat03,
  images.cat04,
  images.cat05
];

const ChalkStrip = () => (
  <div className="st-chalk-strip">
    <div className="st-chalk-container">
      {chalkImages.map((img, index) => (
        <div className="st-chalk-item" key={`chalk-${index}`}>
          <img src={img} alt={`category-${index}`} />
        </div>
      ))}
    </div>
  </div>
);

export default ChalkStrip;
