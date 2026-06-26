import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// Assuming FooterOverlay and Newsletter are intact in components folder
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Al Falaj Hotel, Muscat, Sultanate of Oman</p>
        <p className="p__opensans">+968 2470 2311</p>
        <p className="p__opensans">info@stassentealounge.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" style={{ width: '150px' }} />
        <p className="p__opensans">&quot;Taste the essence of pure Ceylon tea.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Daily:</p>
        <p className="p__opensans">09:00 am - 10:00 pm</p>
        <p className="p__opensans">Afternoon Tea:</p>
        <p className="p__opensans">02:00 pm - 06:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2026 Stassen Tea Lounge. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
