import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header" id="home">
    <video
      src="/video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="app__header-video"
    />
    <div className="app__header-overlay">
      <div className="app__header-content">
        <SubHeading title="Taste the Essence of Pure Ceylon Tea" />
        <h1 className="app__header-h1">Pure Ceylon Tea</h1>
        <p className="p__opensans" style={{ margin: '2rem 0', maxWidth: '600px' }}>
          From the misty highlands of Ceylon, Stassen brings a century of tea heritage to your cup. Every blend is a careful balance of tradition and taste, crafted with passion for those who appreciate the finer things in life.
        </p>
        <button type="button" className="custom__button">Explore Teas</button>
      </div>
    </div>
  </div>
);

export default Header;
