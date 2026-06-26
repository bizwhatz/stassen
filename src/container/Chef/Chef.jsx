import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Story" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">From the misty highlands of Ceylon, Stassen brings a century of tea heritage to your cup.</p>
        </div>
        <p className="p__opensans"> Every blend is a careful balance of tradition and taste, crafted with passion for those who appreciate the finer things in life. Our tea lounge at Al Falaj Hotel offers an intimate setting where each cup tells a story — of dedicated farmers, ancient ritual, and the timeless art of brewing the perfect cup of Ceylon tea. </p>
      </div>

      <div className="app__chef-sign">
        <p>Stassen Tea</p>
        <p className="p__opensans">Premium Ceylon</p>
        <img src={images.sign} alt="sign_image" style={{ width: '150px' }} />
      </div>
    </div>
  </div>
);

export default Chef;
