import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import './Header.sass';

const Header = () => {
  const [show, setShow] = useState(false);
  // mobile menu handler
  const handleBurger = () => {
    document.getElementById('burger').classList.toggle('show');
  };

  // showing header background on scroll on Main page
  useEffect(() => {
    if (window.location.pathname === '/') {
      const handleScrollBckgVisibility = () =>
        window.pageYOffset > 485 ? setShow(true) : setShow(false);

      window.addEventListener('scroll', handleScrollBckgVisibility);

      return () => {
        window.removeEventListener('scroll', handleScrollBckgVisibility);
      };
    } else {
      setShow(true);
    }
  }, [show]);

  // animation
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div style={{ ...springs }} className={`header ${show ? 'scrollen' : ''}`}>
      <div className="header__container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="header__logo" />
        </Link>
        <nav className="header__nav">
          <img
            onClick={handleBurger}
            src="../images/burgerMenuIcon.svg"
            alt="Menu"
            className="header__icon"
          />
          <ul className="header__menu">
            <li className="header__item">
              <Link onClick={() => setShow(false)} to="/" className="header__link">
                Главная
              </Link>
            </li>
            <li className="header__item">
              <Link to="/about" className="header__link">
                О нас
              </Link>
            </li>
            <li className="header__item">
              <Link to="/services" className="header__link">
                Услуги и цены
              </Link>
            </li>
            <li className="header__item">
              <Link to="/portfolio" className="header__link">
                Портфолио
              </Link>
            </li>
            <li className="header__item">
              <Link to="/contacts" className="header__link">
                Контакты
              </Link>
            </li>
          </ul>
          <ul className="header__burger" id="burger">
            <li className="header__item">
              <Link onClick={handleBurger} to="/" className="header__link">
                Главная
              </Link>
            </li>
            <li className="header__item">
              <Link onClick={handleBurger} to="/about" className="header__link">
                О нас
              </Link>
            </li>
            <li className="header__item">
              <Link onClick={handleBurger} to="/services" className="header__link">
                Услуги и цены
              </Link>
            </li>
            <li className="header__item">
              <Link onClick={handleBurger} to="/portfolio" className="header__link">
                Портфолио
              </Link>
            </li>
            <li className="header__item">
              <Link onClick={handleBurger} to="/contacts" className="header__link">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </animated.div>
  );
};

export default Header;
