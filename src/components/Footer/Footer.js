import React from 'react';
import WhatsApp from '../../assets/images/WhatsApp.svg';
import Instagram from '../../assets/images/Instagram.svg';
import Button from '../Button/Button';
import './Footer.sass';

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__title">Подпишитесь или свяжитесь с нами</h2>
      <div className="footer__socials">
        <a href="https://wtsp.cc/77014591754">
          <img src={WhatsApp} alt="WhatsApp" className="footer__social" />
        </a>
        <a href="https://instagram.com/zhadi_design_interior?igshid=YmMyMTA2M2Y=">
          <img src={Instagram} alt="Instagram" className="footer__social" />
        </a>
      </div>
      <hr className="footer__line" />
      <Button text="связаться" path="/contacts" />
    </div>
  );
}
