import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FiShoppingBag, FiUser, FiSun, FiMoon } from "react-icons/fi";
import { images } from '../../constants';
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`stassen-nav${scrolled ? " nav--scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="nav-gold-line" />
      <div className="stassen-nav-inner">
        <div className="nav-wrap">
          {/* Left links */}
          <div className="nav-left">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#about">About Tea Lounge</a>
            <a className="nav-link" href="#offers">Our Menu</a>
            <a className="nav-link" href="#offers">Shop</a>
          </div>

          {/* Center logo / brand */}
          <a className="brand-link" href="#home" aria-label="Stassen Tea Lounge — Home">
            <img src={images.logo} alt="Stassen Tea Lounge" style={{ height: scrolled ? '50px' : '70px', transition: 'height 0.3s ease' }} />
          </a>

          {/* Right links + actions */}
          <div className="nav-right-wrap">
            <div className="nav-links-right">
              <a className="nav-link" href="#contact">Events</a>
              <a className="nav-link" href="#gallery">Gallery</a>
              <a className="nav-link" href="#contact">Contact Us</a>
              <div className="nav-actions">
                <button className="nav-icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                  {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                </button>
                <a className="nav-icon-btn" href="#login" aria-label="Login"><FiUser size={16} /></a>
                <a className="nav-icon-btn primary" href="#home" aria-label="Cart"><FiShoppingBag size={16} /></a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="nav-toggler"
              type="button"
              onClick={() => setToggleMenu(true)}
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu fontSize={22} color="#DCCA87" />
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {toggleMenu && (
        <div className="mobile-menu-overlay slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={28}
            className="mobile-close-icon"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="mobile-nav-links">
            <li><a href="#offers" onClick={() => setToggleMenu(false)} className="mobile-nav-link">Our Menu</a></li>
            <li><a href="#gallery" onClick={() => setToggleMenu(false)} className="mobile-nav-link">Gallery</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)} className="mobile-nav-link">Contact</a></li>
          </ul>
          
          <div className="mobile-nav-bottom">
            <p className="mobile-nav-bottom-text">Taste The Essence Of Pure Ceylon Tea</p>
            <div className="mobile-nav-bottom-row">
              <img src={images.logo} alt="Stassen" className="mobile-bottom-logo" />
              <div className="mobile-nav-bottom-actions">
                <button className="mobile-icon-btn-outline theme-toggle" onClick={toggleTheme}>
                  {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                </button>
                <a className="mobile-icon-btn-outline" href="#login"><FiUser size={18} /></a>
                <a className="mobile-icon-btn-filled" href="#home"><FiShoppingBag size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
