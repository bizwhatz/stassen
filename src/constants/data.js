import images from './images';

const wines = [
  { title: 'Stassen Organic Green Tea',     price: 'OMR 2.500', tags: 'Ceylon | Fresh Green Organic' },
  { title: 'Stassen English Breakfast Tea', price: 'OMR 2.500', tags: 'Ceylon | Rich Smooth Blend' },
  { title: 'Stassen Earl Grey Tea',         price: 'OMR 2.500', tags: 'Ceylon | Classic Bergamot' },
  { title: 'Stassen Jasmine Tea',           price: 'OMR 2.500', tags: 'Ceylon | Floral Delicate' },
  { title: 'Stassen Chamomile Tea',         price: 'OMR 2.000', tags: 'Herbal | Calming Tisane' },
];

const cocktails = [
  { title: 'Stassen Cherry Tea',     price: 'OMR 2.000', tags: 'Fruity | Black Tea Infusion' },
  { title: 'Stassen Pineapple Tea',  price: 'OMR 2.000', tags: 'Tropical | Bright Tea Notes' },
  { title: 'Stassen Peach Tea',      price: 'OMR 2.000', tags: 'Fruity | Soft Peach Blend' },
  { title: 'Stassen Lemon Tea',      price: 'OMR 2.000', tags: 'Citrus | Refreshing Zest' },
  { title: 'Stassen Strawberry Tea', price: 'OMR 2.000', tags: 'Berry | Sweet Infusion' },
];

const awards = [
  {
    imgUrl: images.tea01,
    title: 'Best Tea Brand',
    subtitle: 'Awarded for excellence in Ceylon tea craftsmanship and quality.',
  },
  {
    imgUrl: images.tea02,
    title: 'Luxury Tea Lounge',
    subtitle: 'Recognized for premium lounge experience and refined service.',
  },
  {
    imgUrl: images.tea03,
    title: 'Heritage Gold Award',
    subtitle: 'Celebrating a century of Sri Lankan tea tradition.',
  },
  {
    imgUrl: images.tea04,
    title: 'Sustainability Star',
    subtitle: 'Honoring eco-conscious farming and ethical sourcing.',
  },
];

const data = { wines, cocktails, awards };
export default data;
