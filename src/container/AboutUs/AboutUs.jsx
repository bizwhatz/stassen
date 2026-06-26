import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const staggeredData = [
  {
    subtitle: 'ARTISAN CRAFT',
    title: 'Rolling Flavours',
    desc: 'Elegant layers, handcrafted details, and a calm tea-room rhythm shape the experience. Each plate is prepared with a quiet precision that makes the whole lounge feel thoughtful and refined.',
    tag: 'HAND-FINISHED SERVICE',
    img: images.ourStory,
    reverse: false,
  },
  {
    subtitle: 'ATMOSPHERE',
    title: 'Uniqueness',
    desc: 'Soft cream space, polished tableware, and restrained detailing create a setting that feels intimate without trying too hard. The composition is cleaner, lighter, and more premium.',
    tag: 'QUIET LUXURY MOOD',
    img: images.knife,
    reverse: true,
  },
  {
    subtitle: 'GATHERING RITUAL',
    title: 'Hi-Tea',
    desc: 'A graceful balance of sweet and savory pieces, refined tea service, and long afternoon conversations. The layout lets the imagery breathe while the text remains compact and elegant.',
    tag: 'CURATED FOR SHARING',
    img: images.chef,
    reverse: false,
  },
  {
    subtitle: 'FRESH INFUSIONS',
    title: 'Brewed to Chill',
    desc: 'Fruit-forward iced tea and refreshing blends add brightness to the experience. A lighter, fresher note while keeping the same elevated tone.',
    tag: 'BRIGHT SEASONAL POURS',
    img: images.laurels,
    reverse: true,
  },
];

const StaggeredCard = ({ data }) => (
  <div className={`st-stagger-card ${data.reverse ? 'st-stagger-reverse' : ''}`}>
    <div className="st-stagger-img">
      <img src={data.img} alt={data.title} />
    </div>
    <div className="st-stagger-content">
      <p className="st-stagger-subtitle">{data.subtitle}</p>
      <h2 className="st-stagger-title">{data.title}</h2>
      <p className="st-stagger-desc">{data.desc}</p>
      <div className="st-stagger-tag">
        <span className="st-stagger-line"></span>
        <span>{data.tag}</span>
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div className="st-stagger-container">
      {staggeredData.map((item, index) => (
        <StaggeredCard data={item} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default AboutUs;
